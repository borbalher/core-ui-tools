const CoreHandlebarsHelperTranslate = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperTranslateLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperTranslate}
   */
  locate()
  {
    const dictionary = this.locator.locate('core/dictionary')
    return new CoreHandlebarsHelperTranslate(dictionary)
  }
}

module.exports = CoreHandlebarsHelperTranslateLocator
