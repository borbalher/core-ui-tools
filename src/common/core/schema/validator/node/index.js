const InvalidNodeError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorNode
{
  valid(options, data)
  {
    if(typeof data !== 'object')
    {
      const msg = `Element must be an object`
      throw new InvalidNodeError(msg)
    }

    if(data.hasOwnProperty('id') && typeof data.id  === 'string')
    {
      const msg = `Id must be a string`
      throw new InvalidNodeError(msg)
    }

    if(data.hasOwnProperty('name') && typeof data.name  === 'string')
    {
      const msg = `Name must be a string`
      throw new InvalidNodeError(msg)
    }
  }
}

module.exports = SchemaValidatorNode
