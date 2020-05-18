const Normalizer = require('.')

class NormalizerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    composer   = this.locator.locate('core/schema/composer'),
    coreString = this.locator.locate('core/string')
    return new Normalizer(composer, coreString)
  }
}

module.exports = NormalizerLocator
