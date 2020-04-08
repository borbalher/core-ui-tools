const HTTPGateway = require('core-ui-tools/core/common/http-gateway')

class HTTPGatewayFactory
{
  constructor(fetch)
  {
    this.fetch = fetch
  }
  create({
    url,
    headers
  })
  {
    return new HTTPGateway({
      fetch,
      url,
      headers
    })
  }
}

module.exports = HTTPGatewayFactory
