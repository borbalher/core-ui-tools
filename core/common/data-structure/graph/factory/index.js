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
    state  = this.composer.compose(this[Symbol.for('schema')], { nodes, edges, isDirected }),
    graph  = new Graph(this.composer, state)

    return graph
  }

  get [Symbol.toStringTag]()
  {
    return 'GraphFactory'
  }
}

module.exports = GraphFactory
