const InvalidGraphError = require('./error/invalid')
/**
 * @implements {SchemaValidator}
 */
class SchemaValidatorGraph
{
  constructor(nodeValidator, edgeValidator)
  {
    this.nodeValidator = nodeValidator
    this.edgeValidator = edgeValidator
  }

  isGraph(element)
  {
    return typeof element === 'object' &&
          (element.hasOwnProperty('isDirected') && typeof element.isDirected  === 'boolean'),
          (element.hasOwnProperty('name') && typeof element.name  === 'string')
  }

  valid(options, data)
  {
    if(typeof data !== 'object')
    {
      const msg = `Element must be an object`
      throw new InvalidGraphError(msg)
    }
    if(data.hasOwnProperty('isDirected') && typeof data.isDirected  === 'boolean')
    {
      const msg = `IsDirected must be a boolean`
      throw new InvalidGraphError(msg)
    }

    if(!Array.isArray(nodes))
    {
      const msg = `Nodes must be an array`
      throw new InvalidGraphError(msg)
    }
    else
    {
      let index = 0
      try
      {
        for(index = 0; index < data.nodes.length; index++)
        {
          this.nodeValidator.valid(nodes[index])
        }
      }
      catch(error)
      {
        const msg = `Element at index ${index} is not a node`
        throw new InvalidGraphError(msg)
      }
    }

    if(!Array.isArray(edges))
    {
      const msg = `Edges must be an array`
      throw new InvalidGraphError(msg)
    }
    else
    {
      let index = 0
      try
      {
        for(index = 0; index < data.edges.length; index++)
        {
          this.edgeValidator.valid(edges[index])
        }
      }
      catch(error)
      {
        const msg = `Element at index ${index} is not an edge`
        throw new InvalidGraphError(msg)
      }
    }
  }
}

module.exports = SchemaValidatorGraph
