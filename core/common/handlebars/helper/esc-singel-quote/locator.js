const CoreHandlebarsHelperEscSingelQuote = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperEscSingelQuoteLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperEscSingelQuote}
   */
  locate()
  {
    return new CoreHandlebarsHelperEscSingelQuote()
  }
}

module.exports = CoreHandlebarsHelperEscSingelQuoteLocator
