const SchemaValidatorTreeNode = require('.')

class SchemaValidatorTreeNodeLocator
{
  locate()
  {
    return new SchemaValidatorTreeNode()
  }
}

module.exports = SchemaValidatorTreeNodeLocator
