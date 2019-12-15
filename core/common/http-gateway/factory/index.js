const HTTPGateway = require('..')

class HTTPGatewayFactory
{
  create({
    options,
    baseHeaders
  })
  {
    return new HTTPGateway({
      options,
      baseHeaders
    })
  }
}

module.exports = HTTPGatewayFactory
