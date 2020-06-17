const ComponentComposer = require('.')

class ComponentComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new ComponentComposer(configuration)
  }
}

module.exports = ComponentComposerLocator
