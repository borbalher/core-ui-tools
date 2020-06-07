const CoreMoment = require('.')

class CoreMomentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration   = this.locator.locate('core/configuration'),
    locale          = configuration.find('core.moment.locale')

    return new CoreMoment(locale)
  }
}

module.exports = CoreMomentLocator
