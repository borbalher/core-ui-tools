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
    options                            = configuration.find('core.dictionary'),
    { fallBackLanguage, dictionaries } = options

    return new Dictionary(fallBackLanguage, dictionaries)
  }
}

module.exports = DictionaryLocator
