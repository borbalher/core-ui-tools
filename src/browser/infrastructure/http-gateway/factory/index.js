const HTTPGateway = require('..')

class HTTPGatewayFactory
{
  create(baseURL, baseHeaders)
  {
    return new HTTPGateway(baseURL, baseHeaders)
  }
}

module.exports = HTTPGatewayFactory
