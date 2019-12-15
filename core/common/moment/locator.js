const CoreMoment = require('.')

class CoreMomentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const moment = require('moment')

    return new CoreMoment(moment, 'es')
  }
}

module.exports = CoreMomentLocator
