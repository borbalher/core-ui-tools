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
    const
    configuration = this.locator.locate('core/configuration'),
    fallbackLang  = configuration.find('core.handlebars.translate.fallbackLang'),
    dictionaries  = configuration.find('core.handlebars.translate.dictionaries'),
    lang          = configuration.find('core.handlebars.translate.lang')

    return new CoreHandlebarsHelperTranslate(fallbackLang, dictionaries, lang)
  }
}

module.exports = CoreHandlebarsHelperTranslateLocator
