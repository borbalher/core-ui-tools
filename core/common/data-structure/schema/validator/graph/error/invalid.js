/**
 * @extends {Error}
 */
class InvalidGraphError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_GRAPH'
  }
}

module.exports = InvalidGraphError
