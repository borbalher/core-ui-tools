const MissingSchemaDefinitionError = require('./error/missing-schema-definition')
/**
 * @implements {SchemaFilter}
 */
class SchemaFilterSchema
{
  constructor(locator)
  {
    this.locator = locator
  }

  filter(options, data)
  {
    return options.collection
      ? this.filterCollection(options, data)
      : this.filterSingle(options, data)
  }

  filterCollection(options, data)
  {
    if(!Array.isArray(data))
      return data

    const collection = []

    for(const item of data)
    {
      const filtered = this.filterSingle(options, item)
      collection.push(filtered)
    }

    return collection
  }

  filterSingle(options, data)
  {
    if(typeof options.schema === 'string')
    {
      const composer = this.locator.locate('core/schema/composer')

      return options.trait
        ? composer.trait(options.schema, options.trait, data)
        : composer.compose(options.schema, data)
    }
    else
    {
      throw new MissingSchemaDefinitionError('Expected the attribute "schema" to declare what type of schema ')
    }
  }
}

module.exports = SchemaFilterSchema
