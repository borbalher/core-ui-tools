const ToggeablePanelComposer = require('.')

class ToggeablePanelComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.toggeable-panel')

    return new ToggeablePanelComposer(this.locator, options)
  }
}

module.exports = ToggeablePanelComposerLocator
