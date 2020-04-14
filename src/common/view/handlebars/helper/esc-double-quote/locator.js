const CoreHandlebarsHelperEscDoubleQuote  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperEscDoubleQuoteLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperEscDoubleQuote}
   */
  locate()
  {
    return new CoreHandlebarsHelperEscDoubleQuote()
  }
}

module.exports = CoreHandlebarsHelperEscDoubleQuoteLocator
