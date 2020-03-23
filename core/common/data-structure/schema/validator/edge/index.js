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
           (element.hasOwnProperty('source') && typeof element.source  === 'string'),
           (element.hasOwnProperty('target') && typeof element.target  === 'string'),
           element.hasOwnProperty('payload') && this.jsonValidator.valid(payload)
  }

  valid(options, data)
  {
    if(typeof data !== 'object')
    {
      const msg = `Element must be an object`
      throw new InvalidEdgeError(msg)
    }
    if(data.hasOwnProperty('source') && typeof data.source  === 'string')
    {
      const msg = `Source must be a string`
      throw new InvalidEdgeError(msg)
    }
    if(data.hasOwnProperty('target') && typeof data.source  === 'target')
    {
      const msg = `Target must be a string`
      throw new InvalidEdgeError(msg)
    }

    try
    {
      this.jsonValidator.valid(payload)
    }
    catch(error)
    {
      const msg = `Payload must be a json`
      throw new InvalidEdgeError(msg)
    }
  }
}

module.exports = SchemaValidatorEdge
