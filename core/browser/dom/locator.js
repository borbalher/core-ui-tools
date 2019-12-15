const DOM = require('.')

class DOMLocator
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
    hbs         = this.locator.locate('core/handlebars')

    return new DOM(treeFactory, hbs, bus)
  }
}

module.exports = DOMLocator
