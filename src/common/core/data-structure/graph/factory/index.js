const Graph = require('..')

class GraphFactory
{
  constructor(composer, nodeValidator, edgeValidator, object)
  {
    this.composer               = composer
    this.nodeValidator          = nodeValidator
    this.edgeValidator          = edgeValidator
    this.object                 = object
    this[Symbol.for('schema')]  = 'data-structure/graph'
  }

  /**
   * @returns {Graph}
   */
  create(nodes = [], edges = [], isDirected = true)
  {
    const graph = { nodes, edges, isDirected }

    this.composer.compose(this[Symbol.for('schema')], { nodes, edges, isDirected })

    return new Graph(this.nodeValidator, this.edgeValidator, this.object, graph)
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory
