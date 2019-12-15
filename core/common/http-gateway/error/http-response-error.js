/**
 * HTTPResponseError class
 * @class
 * @extends Error
 */
class HTTPResponseError extends Error
{
  /**
   * Creates a HTTPResponseError.
   */
  constructor(...args)
  {
    super(...args)
    this.code = 'HTTP_GATEWAY_ERROR'
  }
}

module.exports = HTTPResponseError
