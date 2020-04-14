class SchemaToFormBody
{
  constructor(locator, fs, schemas, path)
  {
    this.locator        = locator
    this.fs             = fs
    this.schemas        = schemas
    this.path           = path
    this.supportedTypes = ['schema', 'string', 'timestamp', 'decimal', 'integer']
    // ['boolean', 'decimal', 'integer', 'schema', 'string', 'timestamp']
  }

  createHandlebarsTemplate(schema)
  {
    let template = ''
    for(const key in schema)
    {
      if(this.supportedTypes.indexOf(schema[key].type) !== -1)
      {
        const description = schema[key].description ? ` '${schema[key].description}'` : ''
        template += `{{component ${key}${description}}}\n`
      }
    }

    return template
  }

  getInputSchema(options)
  {
    if(options.enum)
      return 'select-input'

    if(options.type === 'string')
      return 'text-input'

    if(options.type === 'decimal' || options.type === 'integer')
      return 'number-input'

    if(options.type === 'timestamp')
      return 'date-input'

    if(options.type === 'schema' && options.trait)
    {
      const
      composer = this.locator.locate('core/schema/composer'),
      schema   = composer.composeSchema(options.schema)

      return this.getInputSchema(schema[options.trait])
    }
  }

  getOptionDescription(options)
  {
    if(options.type === 'string')
      return 'text-input'

    if(options.type === 'decimal' || options.type === 'integer')
      return 'number-input'

    if(options.type === 'schema' && options.trait)
    {
      const
      composer = this.locator.locate('core/schema/composer'),
      schema   = composer.composeSchema(options.schema)

      return this.getInputSchema(schema[options.trait])
    }
  }

  getInputDescription(options)
  {
    if(options.description)
    {
      return options.description
    }
    else if(options.type === 'schema' && options.trait)
    {
      const
      composer = this.locator.locate('core/schema/composer'),
      schema   = composer.composeSchema(options.schema)

      return this.getInputDescription(schema[options.trait])
    }
  }

  getInputExample(options)
  {
    if(options.example)
    {
      return options.example
    }
    else if(options.type === 'schema' && options.trait)
    {
      const
      composer = this.locator.locate('core/schema/composer'),
      schema   = composer.composeSchema(options.schema)

      return this.getInputExample(schema[options.trait])
    }
  }

  transformToInput(options)
  {
    const
    coreObject = this.locator.locate('core/object'),
    input      = coreObject.removeKeysWithSpecificValues({
      schema      : this.getInputSchema(options),
      description : this.getInputDescription(options),
      example     : this.getInputExample(options),
      type        : 'schema'
    }, [undefined])

    return input
  }

  getKeyFormatted(key)
  {
    return /[a-z,A-Z,0-9,_]+/.exec() ? key : `'${key}'`
  }

  getValueFormatted(value)
  {
    if(typeof value === 'string')
      return `'${value}'`

    return value
  }

  getKeyFormattedWithTabulation(key, keyLength)
  {
    const properKey = this.getKeyFormatted(key)
    return properKey.padEnd(keyLength, ' ')
  }

  getLongestKeyLength(schema, key)
  {
    const longestKey = Object.keys(schema[key]).sort((a, b) =>
    {
      return b.length - a.length
    })[0]

    return longestKey.length
  }

  createFormBodySchemaOptions(formBodySchema, key)
  {
    const keyLength = this.getLongestKeyLength(formBodySchema, key)

    let   template  = ''
    for(const option in formBodySchema[key])
      template += `    ${this.getKeyFormattedWithTabulation(option, keyLength)} : ${this.getValueFormatted(formBodySchema[key][option])},\n`

    return template
  }

  createFormBodySchemaTemplate(formBodySchema)
  {
    let template = `const dto = {\n`

    template     += `  '@meta' : {\n`
    template     += `    extends : 'node'\n`
    template     += `  },\n`

    for(const key in formBodySchema)
    {
      template += `  ${this.getKeyFormatted(key)} : {\n`
      template += this.createFormBodySchemaOptions(formBodySchema, key)
      template += `  },\n`
    }
    template += `}\n\nmodule.exports = dto\n`

    return template
  }

  createFormBodySchema(schema)
  {
    const formBodySchema = {}
    for(const key in schema)
    {
      if(this.supportedTypes.indexOf(schema[key].type) !== -1)
        formBodySchema[key] = this.transformToInput(schema[key])
    }

    return formBodySchema
  }

  async createFormBodySchemaFile(schema, schemaName)
  {
    const
    formBodySchema = this.createFormBodySchema(schema),
    template       = this.createFormBodySchemaTemplate(formBodySchema)

    return new Promise((resolve, reject) =>
    {
      this.fs.writeFile(this.schemas[schemaName], template, (error) =>
      {
        if(error)
          reject(error)

        resolve()
      })
    })
  }

  async createHandlebarsTemplateFile(schema, schemaName)
  {
    const template = this.createHandlebarsTemplate(schema)

    return new Promise((resolve, reject) =>
    {
      this.fs.writeFile(this.path.resolve(__dirname, `../../../../../src/view/template/${schemaName}-form-body.handlebars`), template, (error) =>
      {
        if(error)
          reject(error)

        resolve()
      })
    })
  }

  async schemaToFormBody(schemaName)
  {
    const
    composer = this.locator.locate('core/schema/composer'),
    schema   = composer.composeSchema(schemaName)

    await this.createHandlebarsTemplateFile(schema, schemaName)
    await this.createFormBodySchemaFile(schema, schemaName)
  }
}

module.exports = SchemaToFormBody
