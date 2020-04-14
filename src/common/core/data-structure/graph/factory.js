const
CreateGraphError  = require('./error/create-graph'),
isNodeCollection  = require('../is-node-collection'),
isEdgeCollection  = require('../is-edge-collection'),
Graph             = require('.')

class GraphFactory
{
  constructor(object)
  {
    this.object = object
  }

  /**
   * @returns {Graph}
   */
  create(nodes = [], edges = [], isDirected = false)
  {
    if(isNodeCollection(nodes) && isEdgeCollection(edges))
      return new Graph(this.object,  nodes, edges, isDirected)

    throw new CreateGraphError('Could not create graph')
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory
