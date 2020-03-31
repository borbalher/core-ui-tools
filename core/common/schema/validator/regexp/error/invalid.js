/**
 * @extends {Error}
 */
class InvalidRegexpError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_INVALID_REGEXP'
  }
}

module.exports = InvalidRegexpError
