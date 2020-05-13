const InvalidNodeError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorNode
{
  valid(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidNodeError(`Element must be an object`)

    if(!data.hasOwnProperty('id'))
      throw new InvalidNodeError('id property missing')
    else if(typeof data.id  !== 'string')
      throw new InvalidNodeError('id must be a string')
    else if(!data.id)
      throw new InvalidNodeError('id must be a not empty string')

    if(!data.hasOwnProperty('name'))
      throw new InvalidNodeError('name property missing')
    else if(typeof data.name  !== 'string')
      throw new InvalidNodeError('name must be a string')
    else if(!data.name)
      throw new InvalidNodeError('name must be a not empty string')
  }
}

module.exports = SchemaValidatorNode
