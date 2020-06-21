const CoreHandlebarsHelperEscSingleQuote = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperEscSingleQuoteLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperEscSingleQuote}
   */
  locate()
  {
    return new CoreHandlebarsHelperEscSingleQuote()
  }
}

module.exports = CoreHandlebarsHelperEscSingleQuoteLocator
