const ConsoleListenerError = require('.')

class ConsoleListenerErrorLocator
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
      prefix     : 'ERR',
      color      : 'white',
      background : 'red'
    })

    return new ConsoleListenerError(console)
  }
}

module.exports = ConsoleListenerErrorLocator
