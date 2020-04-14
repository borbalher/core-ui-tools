const Confirm  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class ConfirmLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Confirm}
   */
  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('infrastructure/bus')

    return new Confirm(ui, bus)
  }
}

module.exports = ConfirmLocator
