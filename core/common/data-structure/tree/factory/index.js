const Tree = require('..')

class TreeFactory
{
  constructor(composer, nodeValidator, edgeValidator, deepassign)
  {
    this.composer               = composer
    this.nodeValidator          = nodeValidator
    this.edgeValidator          = edgeValidator
    this.deepassign             = deepassign
    this[Symbol.for('schema')]  = 'data-structure/tree'
  }

  /**
   * @returns {Tree}
   */
  create(nodes = [], edges = [], root)
  {
    const tree = { nodes, edges, root, isDirected: true }

    this.composer.compose(this[Symbol.for('schema')], tree)

    return new Tree(this.nodeValidator, this.edgeValidator, tree, this.deepassign)
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory

