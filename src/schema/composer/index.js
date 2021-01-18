const
InvalidAttributeError  = require('./error/invalid-attribute'),
InvalidCollectionError = require('./error/invalid-collection'),
SchemaNotFoundError    = require('./error/schema-not-found'),
ValidatorNotFoundError = require('./error/validator-not-found')

class SchemaComposer
{
  constructor({
    deepclone,
    deepfreeze,
    deepmerge,
    filters,
    schemas,
    validators
  })
  {
    this.deepclone  = deepclone
    this.deepfreeze = deepfreeze
    this.deepmerge  = deepmerge
    this.filters    = filters
    this.schemas    = schemas
    this.validators = validators
  }

  /**
   * @param {string} schemaName
   * @param {Object|Array<Object>} dto
   * @param {boolean} [removeUndefinedProperties=true]
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {Object}
   */
  compose({ schemaName, dto, removeUndefinedProperties = true })
  {
    const
    schema = this.composeSchema(schemaName),
    output = {}

    if(Array.isArray(dto))
      dto = this.deepmerge.merge({}, ...dto)

    for(const attribute in schema)
    {
      try
      {
        output[attribute] = this.attribute({ schemaName, schema, attribute, data: dto[attribute], removeUndefinedProperties })
      }
      catch(error)
      {
        throw new InvalidAttributeError(error.message + '; in root schema: "' + schemaName + '" and root attribute: "' + attribute + '"')
      }
    }


    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return removeUndefinedProperties ? JSON.parse(JSON.stringify(output)) : output
  }

  /**
   * @param {string} schemaName
   * @param {boolean} [includeOptional=false]
   * @param {boolean} [removeUndefinedProperties=true]
   * @throws {E_SCHEMA_NOT_FOUND}
   *
   * @returns {Object}
   */
  composeExample({ schemaName, includeOptional, removeUndefinedProperties = true })
  {
    const
    schema = this.composeSchema(schemaName),

    output = {}

    for(const attribute in schema)
    {
      if(schema[attribute].optional && includeOptional)
      {
        output[attribute] = this.composeExampleValue({
          options : schema[attribute],
          includeOptional,
          removeUndefinedProperties
        })
      }
      else if(!schema[attribute].optional)
      {
        output[attribute] = this.composeExampleValue({
          options : schema[attribute],
          includeOptional,
          removeUndefinedProperties
        })
      }
    }

    if(Object.isFrozen(schema))
      this.deepfreeze.freeze(output)

    return removeUndefinedProperties ? JSON.parse(JSON.stringify(output)) : output
  }


  /**
   * @param {Object} options
   * @param {boolean} includeOptional
   * @param {boolean} removeUndefinedProperties
   * @throws {E_SCHEMA_NOT_FOUND}
   * @returns {Object|undefined}
   */
  composeExampleValue({ options, includeOptional, removeUndefinedProperties })
  {
    let output
    if('example' in options)
    {
      output = options.example
    }
    else if(typeof options.schema === 'string')
    {
      const schema = this.composeExample({
        schemaName : options.schema,
        includeOptional,
        removeUndefinedProperties
      })

      output = options.trait ? schema[options.trait] : schema
    }

    if(options.collection)
      return output ? [output] : []
    else
      return output
  }

  /**
   * @param {string} schemaName
   *
   * @throws {E_SCHEMA_NOT_FOUND}
   *
   * @returns {Object}
   */
  composeSchema({ schemaName })
  {
    if(!this.schemas.has(schemaName))
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const schema = this.buildSchema({
      schema : this.schemas.get(schemaName)
    })

    return schema
  }

  /**
   * @param {string} schemaName
   * @param {string} attribute
   * @param {Object} data
   * @param {boolean} removeUndefinedProperties
   * @throws {E_SCHEMA_NOT_FOUND}
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   *
   * @returns {*}
   */
  trait({ schemaName, attribute, data, removeUndefinedProperties })
  {
    if(schemaName in this.schemas === false)
      throw new SchemaNotFoundError(`Schema: "${schemaName}" not found`)

    const
    schema = this.schemas[schemaName],
    output = this.attribute({
      schemaName,
      schema,
      attribute,
      data,
      removeUndefinedProperties
    })

    return output
  }

  /**
   * @param {string} schemaName
   * @param {Object} schema
   * @param {string} attribute
   * @param {Object} data
   * @param {boolean} removeUndefinedProperties
   * @throws {E_VALIDATOR_NOT_FOUND}
   * @throws {E_INVALID_COLLECTION}
   * @throws {E_SCHEMA_INVALID_ATTRIBUTE}
   * @throws {E_IN
   */
  attribute({ schemaName, schema, attribute, data, removeUndefinedProperties })
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
      data = this.compose({ schemaName: options.schema, dto: {}, removeUndefinedProperties })

    // Filtering datasets if a filter has been defined for the type
    if(this.filters.has(options.type))
    {
      const filter = this.filters.get(options.type)
      data = filter.filter(options, data)
    }

    // Validating type
    if(!this.validators.has(options.type))
      throw new ValidatorNotFoundError(`In schema: "${schemaName}", validator: "${options.type}" not found`)

    try
    {
      const validator = this.validators.get(options.type)

      if(options.collection)
      {
        if(!Array.isArray(data))
          throw new InvalidCollectionError(`In schema: "${schemaName}", invalid type: "${typeof data}", array expected`)


        if(options['collection-size-min'] && options['collection-size-min'] > data.length)
          throw new InvalidCollectionError(`In schema: "${schemaName} invalid collection size, expected min ${options['collection-size-min']}, received size ${data.length}`)


        if(options['collection-size-max'] && options['collection-size-max'] > data.length)
          throw new InvalidCollectionError(`In schema: "${schemaName} invalid collection size, expected max ${options['collection-size-max']}, received size ${data.length}`)


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
   * @throws {E_SCHEMA_NOT_FOUND}
   * @return {Object} Same instance as provided through argument
   */
  buildSchema({ schema })
  {
    if('@meta' in schema)
    {
      if('extends' in schema['@meta'] || 'extend' in schema['@meta'])
      {
        const extendList = schema['@meta'].extends || schema['@meta'].extend

        let extendedSchema = {}

        for(const extendSchemaName of Array.isArray(extendList) ? extendList : [extendList])
        {
          if(!this.schemas.has(extendSchemaName))
            throw new SchemaNotFoundError(`Schema: "${extendSchemaName}" not found`)

          const extend = this.buildSchema({ schema: this.schemas.get(extendSchemaName) })

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
}

module.exports = SchemaComposer
