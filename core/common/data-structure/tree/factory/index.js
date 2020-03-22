const Tree = require('..')

class TreeFactory
{
  constructor(composer, deepassign)
  {
    this.composer               = composer
    this.deepassign             = deepassign
    this[Symbol.for('schema')]  = 'data-structure/tree'
  }

  /**
   * @returns {Tree}
   */
  create(nodes = [], edges = [], root)
  {
    const
    state = this.composer.compose(this[Symbol.for('schema')], { nodes, edges, root }),
    tree  = new Tree(this.composer, this.deepassign, state)

    for(const node of state.nodes)
      tree.addNode(node)

    for(const edge of state.edges)
      tree.addEdge(edge)

    return tree
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory
