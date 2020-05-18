const ComponentFactory = require('.')

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
    page          = this.locator.locate('core/page'),
    hbs           = this.locator.locate('view/handlebars')

    return new ComponentFactory(configuration, bus, this.locator, store, hbs, page)
  }
}

module.exports = ComponentFactoryLocator
