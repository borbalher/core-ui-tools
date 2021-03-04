const HttpServer = require('.')

class HttpServerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration               = this.locator.locate('core/configuration'),
    serverOptions               = configuration.find('core.http.server.options'),
    server                      = require('http').createServer(serverOptions),
    requestBuilder              = this.locator.locate('core/http/server/request/builder'),
    sessionBuilder              = this.locator.locate('core/http/server/session/builder'),
    routeBuilder                = this.locator.locate('core/http/server/route/builder'),
    dispatcherCollectionBuilder = this.locator.locate('core/http/server/dispatcher/collection/builder'),
    dispatcherChain             = this.locator.locate('core/http/server/dispatcher/chain'),
    bus                         = this.locator.locate('infrastructure/bus'),
    eventComposer               = this.locator.locate('core/event/composer'),
    domainFactory               = require('domain'), //! deprecated API
    httpServer                  = new HttpServer({
      bus,
      configuration,
      dispatcherChain,
      dispatcherCollectionBuilder,
      domainFactory,
      eventComposer,
      locator : this.locator,
      requestBuilder,
      routeBuilder,
      server,
      sessionBuilder,
    })

    server.timeout = configuration.find('core.http.server.timeout')
    server.on('request', httpServer.onRequest.bind(httpServer))

    return httpServer
  }
}

module.exports = HttpServerLocator
