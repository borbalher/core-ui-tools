const Normalizer = require('.')

class NormalizerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new Normalizer(composer)
  }
}

module.exports = NormalizerLocator
