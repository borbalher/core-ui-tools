const
InvalidAttributeError               = require('./error/invalid-attribute'),
InvalidCollectionError              = require('./error/invalid-collection'),
InvalidSchemaError                  = require('./error/invalid-schema'),
SchemaNotFoundError                 = require('./error/schema-not-found'),
FilterIsNotHoneringContractError    = require('./error/filter-is-not-honering-contract'),
ValidatorIsNotHoneringContractError = require('./error/validator-is-not-honering-contract'),
ValidatorNotFoundError              = require('./error/validator-not-found'),
SchemaNotResolvable                 = require('./error/schema-not-resolvable')

class SchemaComposer
{
  constructor(locator, deepmerge, deepclone, deepfreeze, schemas, filters, validators)
  {
    this.locator    = locator
    this.deepmerge  = deepmerge
    this.deepclone  = deepclone
    this.deepfreeze = deepfreeze
    this.schemas    = {}
    this.filters    = {}
    this.validators = {}

    this.addSchemas(schemas)
    this.addFilters(filters)
    this.addValidators(validators)
  }

  addSchemas(schemas)
  {
    for(const schemaName in schemas || [])
    {
      try
      {
        const schema = process.env.PLATFORM !== 'browser' ? require(schemas[schemaName]) : require(`dist/${schemas[schemaName]}`)
        this.addSchema(schemaName, schema)
      }
      catch(error)
      {
        throw new SchemaNotResolvable(`Could not resolve path for schema: "${schemaName}", path: "${schemas[schemaName]}"`)
      }
    }
  }

  addFilters(filters)
  {
    for(const filterName in filters || [])
    {
      const filter = this.locator.locate(filters[filterName])
      this.addFilter(filterName, filter)
    }
  }

  addValidators(validators)
  {
    for(const validatorName in validators || [])
    {
      const validator = this.locator.locate(validators[validatorName])
      this.addValidator(validatorName, validator)
    }
  }

  /**
   * @param {string} schemaName
   * @param {Object|Array<Object>} dto
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {Object}
   */
  compose(schemaName, dto)
  {
    const
    schema = this.composeSchema(schemaName),
    output = {}

    if(Array.isArray(dto))
      dto = this.deepmerge.merge({}, ...dto)

    for(const attribute in schema)
      output[attribute] = this.attribute(schemaName, schema, attribute, dto[attribute])


    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return JSON.parse(JSON.stringify(output)) // removing undefined
  }

  /**
   * @param {string} schemaName
   * @param {boolean} includeOptional
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   *
   * @returns {Object}
   */
  composeExample(schemaName, includeOptional)
  {
    const
    schema = this.composeSchema(schemaName),
    output = {}

    for(const attribute in schema)
    {
      if(schema[attribute].optional && includeOptional)
        output[attribute] = this.composeExampleValue(schema[attribute], includeOptional)
      else if(!schema[attribute].optional)
        output[attribute] = this.composeExampleValue(schema[attribute], includeOptional)
    }

    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return JSON.parse(JSON.stringify(output)) // removing undefined
  }

  composeExampleValue(options, includeOptional)
  {
    if('example' in options)
    {
      return options.example
    }
    else if(typeof options.schema === 'string')
    {
      const schema = this.composeExample(options.schema, includeOptional)

      return options.trait ? schema[options.trait] : schema
    }
  }

  /**
   * @param {string} schemaName
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   *
   * @returns {Object}
   */
  composeSchema(schemaName)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const schema = this.buildSchema(this.schemas[schemaName])

    return schema
  }

  /**
   * @param {string} schemaName
   * @param {string} attribute
   * @param {Object} data
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {*}
   */
  trait(schemaName, attribute, data)
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const
    schema = this.schemas[schemaName],
    output = this.attribute(schemaName, schema, attribute, data)

    return output
  }

  /**
   * @private
   */
  attribute(schemaName, schema, attribute, data)
  {
    const options = schema[attribute]

    if('default' in options && data === undefined)
      data = options.default

    // if optional, and undefined or null, then we don't need to filter or validate
    if(options.optional === true && data === undefined)
      return data

    if(options.nullable === true && data === null)
      return data

    if(options.type === 'schema' && data === undefined)
      data = this.compose(options.schema, {})

    // Filtering attributes if a filter has been defined for the type
    if(options.type in this.filters)
    {
      const filter = this.filters[options.type]
      data = filter.filter(options, data)
    }

    // Validating type
    if(options.type in this.validators === false)
      throw new ValidatorNotFoundError(`In schema: "${schemaName}", validator: "${options.type}" not found`)

    try
    {
      const validator = this.validators[options.type]

      if(options.collection)
      {
        if(!Array.isArray(data))
          throw new InvalidCollectionError(`In schema: "${schemaName}", invalid type: "${typeof data}", array expected`)

        for(const item of data)
          validator.valid(options, item)
      }
      else
      {
        validator.valid(options, data)
      }
    }
    catch(error)
    {
      throw new InvalidAttributeError(`Invalid attribute: "${attribute}", schema: "${schemaName}", error: ${error.message}`)
    }

    return data
  }

  /**
   * The schema could have declared a meta field that requires a building process before used
   * The build process will alter the schema provided through an argument
   *
   * @param {Object} schema
   * @return {Object} Same instance as provided through argument
   */
  buildSchema(schema)
  {
    if('@meta' in schema)
    {
      if('extends' in schema['@meta'] || 'extend' in schema['@meta'])
      {
        const extendList = schema['@meta'].extends || schema['@meta'].extend

        let extendedSchema = {}
        for(const extendSchemaName of Array.isArray(extendList) ? extendList : [extendList])
        {
          const extend = this.buildSchema(this.schemas[extendSchemaName])

          extendedSchema = this.deepmerge.merge(extendedSchema, extend)
        }

        schema = { ...extendedSchema, ...schema }
      }


      if(schema['@meta'].immutable || schema['@meta'].immutable === undefined) // TODO makes sense if not exist to make the schema frozen?
      {
        delete schema['@meta']
        Object.freeze(schema)
      }
      else
      {
        delete schema['@meta']
      }
    }

    return schema
  }

  /**
   * @param {string} schemaName
   * @param {Object} schema
   * @throws {E_SCHEMA_INVALID_SCHEMA}
   */
  addSchema(schemaName, schema)
  {
    if(typeof schema !== 'object')
      throw new InvalidSchemaError(`Schema "${schemaName}" must be an object`)

    // TODO: Improve validation of the schema when it's added
    // For the moment we can suffer unexpected errors when we start working with the schema
    // A better approach is to validate the schema structure as a value object
    // ...resulting in a garantee that the schema is of expected definition.

    this.schemas[schemaName] = this.deepclone.clone(schema)
  }

  /**
   * @param {string} filterName
   * @param {SchemaFilter} filter
   * @throws {E_FILTER_IS_NOT_HONERING_CONTRACT}
   */
  addFilter(filterName, filter)
  {
    if(typeof filter.filter !== 'function')
      throw new FilterIsNotHoneringContractError(`Filter "${filterName}" not honering contract`)

    this.filters[filterName] = filter
  }

  /**
   * @param {string} validatorName
   * @param {SchemaValidator} validator
   * @throws {E_VALIDATOR_IS_NOT_HONERING_CONTRACT}
   */
  addValidator(validatorName, validator)
  {
    if(typeof validator.valid !== 'function')
      throw new ValidatorIsNotHoneringContractError(`Validator "${validatorName}" not honering contract`)

    this.validators[validatorName] = validator
  }
}

module.exports = SchemaComposer
