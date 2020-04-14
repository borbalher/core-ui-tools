const Alert  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class AlertLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Alert}
   */
  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('infrastructure/bus')

    return new Alert(ui, bus)
  }
}

module.exports = AlertLocator
