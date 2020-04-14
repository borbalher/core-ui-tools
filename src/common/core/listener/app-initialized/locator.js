const AppInitializedListener = require('.')

class AppInitializedListenerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    consoleFactory = this.locator.locate('core/console/factory'),
    console        = consoleFactory.create()
    return new AppInitializedListener(console)
  }
}

module.exports = AppInitializedListenerLocator
