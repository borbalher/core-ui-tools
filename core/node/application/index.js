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

    const { performance } = require('perf_hooks')
    this.performance = performance
  }

  run(port)
  {
    return new Promise((resolve, reject) =>
    {
      if(this.isRunning)
      {
        const error = new ApplicationRunningError('Application already running')
        reject(error)
      }

      const loadStart = this.performance.now()
      this.core.load().then(() =>
      {
        const
        loadEnd        = this.performance.now(),
        bootstrapStart = this.performance.now()

        this.core.locate('core/bootstrap').bootstrap().then(() =>
        {
          const
          bootstrapEnd  = this.performance.now(),
          server        = this.core.locate('core/http/server')

          server.onListening(() =>
          {
            this.isRunning = true
            this.port      = port

            const
            bus     = this.core.locate('core/bus'),
            metrics = {
              metrics : {
                components      : this.core.components,
                totalcomponents : Object.keys(this.core.components).length,
                load            : loadEnd - loadStart,
                bootstrap       : bootstrapEnd - bootstrapStart
              }
            }

            bus.emit('app', 'app.initialized', { port, metrics })

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
