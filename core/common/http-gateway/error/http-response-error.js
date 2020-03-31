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
  constructor(message, code, ...args)
  {
    super(message, ...args)
    this.code = code ? code : 'HTTP_GATEWAY_ERROR'
  }
}

module.exports = HTTPResponseError
