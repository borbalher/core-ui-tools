const EventEmitterFactory = require('.')

class EventEmitterFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {EventEmitterFactory}
   */
  locate()
  {
    const
    composer        = this.locator.locate('core/schema/composer'),
    consoleFactory  = this.locator.locate('core/console/factory')

    return new EventEmitterFactory(
      composer,
      consoleFactory
    )
  }
}

module.exports = EventEmitterFactoryLocator
