/**
 * @extends {Error}
 */
class InvalidTreeNodeError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_TREE_NODE'
  }
}

module.exports = InvalidTreeNodeError
