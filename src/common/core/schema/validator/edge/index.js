const InvalidEdgeError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorEdge
{
  constructor(jsonValidator)
  {
    this.jsonValidator = jsonValidator
  }

  isEdge(element)
  {
    return typeof element === 'object' &&
           (element.hasOwnProperty('source') && typeof element.source  === 'string') &&
           (element.hasOwnProperty('target') && typeof element.target  === 'string') &&
           element.hasOwnProperty('payload') && this.jsonValidator.valid(element.payload)
  }

  valid(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidEdgeError(`Element must be an object`)

    if(data.hasOwnProperty('source') && typeof data.source  !== 'string')
      throw new InvalidEdgeError(`Source must be a string`)

    if(data.hasOwnProperty('target') && typeof data.target  !== 'string')
      throw new InvalidEdgeError(`Target must be a string`)

    try
    {
      this.jsonValidator.valid(data.payload)
    }
    catch(error)
    {
      throw new InvalidEdgeError(`Payload must be a json`)
    }
  }
}

module.exports = SchemaValidatorEdge
