const MetricsListener = require('../metrics')

class MetricsListenerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory = this.locator.locate('core/console/factory'),
    logConsole     = consoleFactory.create({
      prefix : 'METRICS'
    })

    return new MetricsListener(logConsole)
  }
}

module.exports = MetricsListenerLocator
