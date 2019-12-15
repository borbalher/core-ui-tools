const ComponentComposer = require('.')

class ComponentComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new ComponentComposer(composer)
  }
}

module.exports = ComponentComposerLocator
