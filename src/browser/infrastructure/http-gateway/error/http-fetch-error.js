/**
 * HTTPFetchError class
 * @class
 * @extends Error
 */
class HTTPFetchError extends Error
{
  /**
   * Creates a HTTPFetchError.
   */
  constructor(...args)
  {
    super(...args)
    this.code = 'HTTP_FETCH_ERROR'
  }
}

module.exports = HTTPFetchError
