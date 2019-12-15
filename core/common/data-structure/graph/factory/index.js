const Graph = require('..')

class GraphFactory
{
  constructor(composer)
  {
    this.composer               = composer
    this[Symbol.for('schema')]  = 'data-structure/graph'
  }

  /**
   * @returns {Graph}
   */
  create(nodes = [], edges = [], isDirected = true)
  {
    const
    graphDTO  = this.composer.compose(this[Symbol.for('schema')], { nodes, edges, isDirected }),
    graph     = new Graph(this.composer, graphDTO.isDirected)

    for(const node of graphDTO.nodes)
      graph.addNode(node)

    for(const edge of graphDTO.edges)
      graph.addEdge(edge)

    return graph
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory
