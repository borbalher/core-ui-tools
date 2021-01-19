const InvalidRegexpError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorRegexp
{
  valid(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidRegexpError(`Invalid type: "${typeof data}", object expected`)

    if(Object.prototype.toString.call(data) !== '[object RegExp]')
      throw new InvalidRegexpError('Invalid object, regexp expected')
  }
}

module.exports = SchemaValidatorRegexp
