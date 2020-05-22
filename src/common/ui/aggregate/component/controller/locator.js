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
    configuration  = this.locator.locate('core/configuration'),
    bus            = this.locator.locate('infrastructure/bus'),
    store          = this.locator.locate('core/store'),
    hbs            = this.locator.locate('view/handlebars'),
    actionComposer = this.locator.locate('core/action-composer')

    return new ComponentFactory(configuration, bus, this.locator, store, hbs, actionComposer)
  }
}

module.exports = ComponentFactoryLocator
