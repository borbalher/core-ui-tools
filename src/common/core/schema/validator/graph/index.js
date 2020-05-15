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
          (element.hasOwnProperty('isDirected') && typeof element.isDirected  === 'boolean') &&
          (element.hasOwnProperty('name') && typeof element.name  === 'string')
  }

  valid(options, data)
  {
    if(typeof data !== 'object')
      throw new InvalidGraphError('Element must be an object')

    if(data.hasOwnProperty('isDirected') && typeof data.isDirected  === 'boolean')
      throw new InvalidGraphError('Attribute isDirected must be a boolean')


    const { nodes, edges } = data
    if(!Array.isArray(nodes))
    {
      throw new InvalidGraphError('Nodes must be an array')
    }
    else
    {
      let index = 0
      try
      {
        for(index = 0; index < data.nodes.length; index++)
          this.nodeValidator.valid(nodes[index])
      }
      catch(error)
      {
        throw new InvalidGraphError(`Element at index ${index} is not a node`)
      }
    }

    if(!Array.isArray(edges))
    {
      throw new InvalidGraphError('Edges must be an array')
    }
    else
    {
      let index = 0
      try
      {
        for(index = 0; index < data.edges.length; index++)
          this.edgeValidator.valid(edges[index])
      }
      catch(error)
      {
        throw new InvalidGraphError(`Element at index ${index} is not an edge`)
      }
    }
  }
}

module.exports = SchemaValidatorGraph
