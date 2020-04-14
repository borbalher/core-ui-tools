const
CreateTreeError   = require('./error/create-tree'),
isNodeCollection  = require('../is-node-collection'),
isEdgeCollection  = require('../is-edge-collection'),
Tree              = require('.')

class TreeFactory
{
  constructor(object, deepassign)
  {
    this.deepassign = deepassign
    this.object     = object
  }

  /**
   * @returns {Tree}
   */
  create(nodes = [], edges = [], root)
  {
    if(isNodeCollection(nodes) && isEdgeCollection(edges))
      return new Tree(this.object, this.deepassign, nodes, edges, true, root)

    throw new CreateTreeError('Could not create tree')
  }

  get [Symbol.toStringTag]()
  {
    return 'TreeFactory'
  }
}

module.exports = TreeFactory
