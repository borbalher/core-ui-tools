const UI = require('.')

class UILocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    treeFactory = this.locator.locate('data-structure/tree/factory'),
    bus         = this.locator.locate('core/bus'),
    hbs         = this.locator.locate('core/handlebars'),
    channel     = bus.createChannel('ui')

    return new UI(treeFactory, hbs, bus, channel)
  }
}

module.exports = UILocator
