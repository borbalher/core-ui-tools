const SelectInputComposer = require('.')

class SelectInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.select-input')

    return new SelectInputComposer(this.locator, options)
  }
}

module.exports = SelectInputComposerLocator
