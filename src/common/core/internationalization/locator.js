const InternationalizationFactory = require('.')

class InternationalizationFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.internationalization'),
    {
      dictionaries,
      fallbackLocale,
      locale
    } = options

    return new InternationalizationFactory({
      dictionaries,
      fallbackLocale,
      locale
    })
  }
}

module.exports = InternationalizationFactoryLocator
