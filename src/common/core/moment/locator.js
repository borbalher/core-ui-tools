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
    moment          = require('moment'),
    configuration   = this.locator.locate('core/configuration'),
    locale          = configuration.find('core.moment.locale')

    return new CoreMoment(moment, locale)
  }
}

module.exports = CoreMomentLocator
