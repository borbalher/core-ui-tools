/**
 * @extends {Error}
 */
class InvalidNodeError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_NODE'
  }
}

module.exports = InvalidNodeError
