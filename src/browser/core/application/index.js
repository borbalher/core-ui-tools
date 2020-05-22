const
CoreFactory                = require('../factory'),
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
    this.eventbus     = undefined
    this.isRunning    = false
  }

  isIE()
  {
    return !(!document.attachEvent || typeof document.attachEvent === 'undefined')
  }

  domReady(callback, ...args)
  {
    if(this.isIE())
    {
      document.attachEvent('onreadystatechange', () =>
      {
        if(document.readyState === 'complete')
          return callback(args)
      })
    }
    else
    {
      document.addEventListener('DOMContentLoaded', () =>
      {
        return callback(args)
      })
    }
  }

  get isRunning()
  {
    return this.running
  }

  locate(service)
  {
    return this.core ? this.core.locator.locate(service) : undefined
  }

  stop()
  {
    if(!this.isRunning)
      throw new ApplicationNotRunningError('Application is not running')
    // TODO remove all listeners ?
  }

  run()
  {
    return new Promise((resolve, reject) =>
    {
      if(this.isRunning)
        reject(new ApplicationRunningError('Application already running'))

      const metrics = this.locate('core/metrics')
      metrics.start('dom-ready')
      this.domReady(() =>
      {
        metrics.end('dom-ready')
        metrics.start('core-load')
        this.core.load().then(() =>
        {
          metrics.end('core-load')
          metrics.start('core-bootstrap')

          this.core.locate('core/bootstrap').bootstrap().then(() =>
          {
            metrics.end('core-bootstrap')
            this.eventbus = this.core.locate('infrastructure/bus').getChannel('app')

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
        })
      })
    })
  }
}

module.exports = BrowserApplication
