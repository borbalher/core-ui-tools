const ConsoleListenerInfo = require('.')

class ConsoleListenerInfoLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory  = this.locator.locate('core/console/factory'),
    console         = consoleFactory.create({
      prefix : 'INF'
    })

    return new ConsoleListenerInfo(console)
  }
}

module.exports = ConsoleListenerInfoLocator
