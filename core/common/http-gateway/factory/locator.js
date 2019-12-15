const HTTPGatewayFactory  = require('.')
/**
 * @implements {superhero/core/locator/constituent}
 */
class HTTPGatewayFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {HTTPGatewayFactory}
   */
  locate()
  {
    return new HTTPGatewayFactory()
  }
}

module.exports = HTTPGatewayFactoryLocator
