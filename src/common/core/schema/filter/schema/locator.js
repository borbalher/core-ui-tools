const SchemaFilterSchema = require('.')

class SchemaFilterSchemaLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new SchemaFilterSchema(this.locator)
  }
}

module.exports = SchemaFilterSchemaLocator
