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
    treeDTO = this.composer.compose(this[Symbol.for('schema')], { nodes, edges, root }),
    tree    = new Tree(this.composer, this.deepassign, treeDTO.root)

    for(const node of treeDTO.nodes)
      tree.addNode(node)

    for(const edge of treeDTO.edges)
      tree.addEdge(edge)

    return tree
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory
