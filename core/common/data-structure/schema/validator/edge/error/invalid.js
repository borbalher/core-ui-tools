/**
 * @extends {Error}
 */
class InvalidEdgeError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_EDGE'
  }
}

module.exports = InvalidEdgeError
