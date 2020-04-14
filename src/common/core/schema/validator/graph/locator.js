const SchemaValidatorGraph = require('.')

class SchemaValidatorGraphLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    nodeValidator = this.locator.locate('core/schema/validator/node'),
    edgeValidator = this.locator.locate('core/schema/validator/edge')

    return new SchemaValidatorGraph(nodeValidator, edgeValidator)
  }
}

module.exports = SchemaValidatorGraphLocator
