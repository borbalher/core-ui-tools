const
CoreFactory                = require('../factory'),
domIsReady                 = require('../dom-ready'),
ApplicationRunningError    = require('./error/application-running'),
ApplicationNotRunningError = require('./error/application-not-running')

/**
 * @implements Application
 */
class BrowserApplication
{
  constructor(components)
  {
    const coreFactory = new CoreFactory()
    this.core         = coreFactory.create(components)
    this.domIsReady   = domIsReady
    this.isRunning    = false
  }

  get isRunning()
  {
    return this.running
  }

  // set DOM(dom)
  // {
  //   this.dom = dom
  // }

  // get DOM()
  // {
  //   return this.dom
  // }

  locate(service)
  {
    return this.core ? this.core.locator.locate(service) : undefined
  }

  stop()
  {
    if(!this.isRunning)
      throw new ApplicationNotRunningError('Application is not running')

    // TODO remove all listeners
  }

  run()
  {
    return new Promise((resolve, reject) =>
    {
      if(this.isRunning)
      {
        const error = new ApplicationRunningError('Application already running')
        reject(error)
      }

      const domReadyStart = window.performance.now()
      domIsReady(() =>
      {
        const
        domReadyEnd = window.performance.now(),
        loadStart   = window.performance.now()

        this.core.load().then(() =>
        {
          const
          loadEnd        = window.performance.now(),
          bootstrapStart = window.performance.now()

          this.core.locate('core/bootstrap').bootstrap().then(() =>
          {
            const
            bootstrapEnd  = window.performance.now(),
            bus           = this.core.locate('core/bus'),
            metrics       = {
              metrics : {
                components      : this.core.components,
                totalcomponents : Object.keys(this.core.components).length,
                load            : loadEnd - loadStart,
                bootstrap       : bootstrapEnd - bootstrapStart,
                domReady        : domReadyEnd - domReadyStart
              }
            }

            bus.emit('events', 'app.initialized', { metrics })

            this.running = true

            resolve()
          })
        })
      })
    })
  }
}

module.exports = BrowserApplication
