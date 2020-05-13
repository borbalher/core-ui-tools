const ComponentComposer = require('.')

class ComponentComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ComponentComposer()
  }
}

module.exports = ComponentComposerLocator
