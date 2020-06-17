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
    deepfind       = this.locator.locate('core/deepfind'),
    actionComposer = this.locator.locate('core/action/composer'),
    eventComposer  = this.locator.locate('core/event/composer')

    return new ComponentFactory(configuration, bus, this.locator, store, hbs, deepfind, eventComposer, actionComposer)
  }
}

module.exports = ComponentFactoryLocator
