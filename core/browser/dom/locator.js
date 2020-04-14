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
    treeFactory = this.locator.locate('data-structure/tree'),
    bus         = this.locator.locate('infrastructure/bus'),
    hbs         = this.locator.locate('view/handlebars')

    return new DOM(treeFactory, hbs, bus)
  }
}

module.exports = DOMLocator
