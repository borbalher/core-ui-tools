const UI = require('.')

class UILocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  getInitialViewModel()
  {
    const
    localStorage      = this.locator.locate('infrastructure/local-storage/gateway'),
    initialViewModel  = localStorage.getItem('initial-view-model')
    return JSON.parse(initialViewModel)
  }

  locate()
  {
    const
    initialViewModel  = this.getInitialViewModel(),
    treeFactory       = this.locator.locate('data-structure/tree'),
    hbs               = this.locator.locate('view/handlebars'),
    channel           = this.locator.locate('infrastructure/bus').createChannel('ui'),
    jsonToTree        = this.locator.locate('data-structure/json-to-tree'),
    object            = this.locator.locate('core/object'),
    bus               = this.locator.locate('infrastructure/bus'),
    configuration     = this.locator.locate('core/configuration')

    return new UI(initialViewModel, treeFactory, hbs, channel, jsonToTree, object, this.locator, bus, configuration)
  }
}

module.exports = UILocator
