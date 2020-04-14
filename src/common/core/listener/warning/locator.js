const ConsoleListenerWarning = require('.')

class ConsoleListenerWarningLocator
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
      prefix     : 'WARN',
      color      : 'black',
      background : 'yellow'
    })

    return new ConsoleListenerWarning(console)
  }
}

module.exports = ConsoleListenerWarningLocator
