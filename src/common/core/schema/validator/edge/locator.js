const SchemaValidatorEdge = require('.')

class SchemaValidatorEdgeLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const jsonValidator = this.locator.locate('core/schema/validator/json')
    return new SchemaValidatorEdge(jsonValidator)
  }
}

module.exports = SchemaValidatorEdgeLocator
