const
CoreFactory                = require('../factory'),
ApplicationRunningError    = require('./error/application-running'),
ApplicationNotRunningError = require('./error/application-not-running')

class NodeApplication
{
  constructor(components)
  {
    const coreFactory = new CoreFactory()
    this.core         = coreFactory.create(components)
    this.isRunning    = false
  }

  run(port)
  {
    return new Promise((resolve, reject) =>
    {
      if(this.isRunning)
        reject(new ApplicationRunningError('Application already running'))

      const metrics = this.locate('core/metrics')

      metrics.start('core-load')
      this.core.load().then(() =>
      {
        metrics.end('core-load')
        metrics.start('core-bootstrap')

        this.core.locate('core/bootstrap').bootstrap().then(() =>
        {
          metrics.end('core-bootstrap')

          const server = this.core.locate('core/http/server')

          server.onListening(() =>
          {
            this.isRunning = true
            this.port      = port

            this.eventbus  = this.core.locate('infrastructure/bus').getChannel('app')

            const
            eventComposer       = this.core.locate('core/event/composer'),
            appInitializedEvent = eventComposer.compose('app.initialized', {
              components      : this.core.components,
              totalcomponents : Object.keys(this.core.components).length,
              metrics         :
              {
                ...metrics.getReport()
              }
            })

            this.eventbus.emit(appInitializedEvent)

            this.running = true

            resolve()
          })

          server.listen(port)
        })
      })
    })
  }

  locate(name)
  {
    return this.core.locate(name)
  }

  async stop()
  {
    if(!this.isRunning)
      throw new ApplicationNotRunningError('Application is not running')

    await this.core.locate('core/http/server').close()
  }
}

module.exports = NodeApplication
