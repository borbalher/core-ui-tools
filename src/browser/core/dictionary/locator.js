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
    cookies                            = this.locator.locate('infrastructure/cookies'),
    options                            = configuration.find('core.dictionary'),
    { fallBackLanguage, dictionaries } = options

    return new Dictionary(cookies, fallBackLanguage, dictionaries)
  }
}

module.exports = DictionaryLocator
