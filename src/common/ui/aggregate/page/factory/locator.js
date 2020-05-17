const PageFactory = require('.')

class PageFactoryLocator
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
    hbs           = this.locator.locate('view/handlebars')

    return new PageFactory(configuration, bus, this.locator, store, hbs)
  }
}

module.exports = PageFactoryLocator
