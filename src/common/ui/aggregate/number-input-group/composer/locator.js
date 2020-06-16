const NumberInputGroupComposer = require('.')

class NumberInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.number-input-group')

    return new NumberInputGroupComposer(this.locator, options)
  }
}

module.exports = NumberInputGroupComposerLocator
