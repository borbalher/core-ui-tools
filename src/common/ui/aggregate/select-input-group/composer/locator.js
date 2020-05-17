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
    options       = configuration.find('ui.component.select-input-group')

    return new SelectInputComposer(this.locator, options)
  }
}

module.exports = SelectInputComposerLocator