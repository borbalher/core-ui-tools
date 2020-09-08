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
    configuration                      = this.locator.locate('core/configuration'),
    localStorage                       = this.locator.locate('infrastructure/local-storage/gateway'),
    options                            = configuration.find('core.dictionary'),
    { fallBackLanguage, dictionaries } = options

    return new Dictionary(localStorage, fallBackLanguage, dictionaries)
  }
}

module.exports = DictionaryLocator
