const HTTPGatewayFactory  = require('core-ui-tools/core/common/http-gateway/factory')
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
    const fetch = window.fetch
    return new HTTPGatewayFactory(fetch)
  }
}

module.exports = HTTPGatewayFactoryLocator
