const SchemaValidatorRegexp = require('.')

class SchemaValidatorRegexpLocator
{
  locate()
  {
    return new SchemaValidatorRegexp
  }
}

module.exports = SchemaValidatorRegexpLocator
