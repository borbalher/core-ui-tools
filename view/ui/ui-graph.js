const Tree = require('../../core/common/data-structure/tree')

class UI extends Tree
{
  constructor(nodeValidator, edgeValidator, tree, deepassign)
  {
    super(nodeValidator, edgeValidator, tree, deepassign)
  }
}

module.exports = UI


