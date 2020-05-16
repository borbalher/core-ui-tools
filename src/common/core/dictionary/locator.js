const Dictionary = require('.')

class DictionaryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.dictionary'),
    { fallbackLang, dictionaries, lang } = options

    return new Dictionary(fallbackLang, dictionaries, lang)
  }
}

module.exports = DictionaryLocator
