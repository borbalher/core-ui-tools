const ComponentFactory = require('./factory')

class ComponentFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    bus           = this.locator.locate('infrastructure/bus'),
    store         = this.locator.locate('core/store'),
    hbs           = this.locator.locate('view/handlebars'),
    deepfind      = this.locator.locate('core/deepfind')

    return new ComponentFactory(configuration, bus, this.locator, store, hbs, deepfind)
  }
}

module.exports = ComponentFactoryLocator
