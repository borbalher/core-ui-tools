const SchemaValidatorNode = require('.')

class SchemaValidatorNodeLocator
{
  locate()
  {
    return new SchemaValidatorNode
  }
}

module.exports = SchemaValidatorNodeLocator
