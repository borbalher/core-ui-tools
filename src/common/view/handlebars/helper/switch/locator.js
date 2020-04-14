const CoreHandlebarsHelperSwitch  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperSwitchLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperSwitch}
   */
  locate()
  {
    return new CoreHandlebarsHelperSwitch()
  }
}

module.exports = CoreHandlebarsHelperSwitchLocator
