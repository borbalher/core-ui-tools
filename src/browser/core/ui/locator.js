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
    viewModelToTree   = this.locator.locate('core/mapper/view-model-to-tree'),
    object            = this.locator.locate('core/object'),
    configuration     = this.locator.locate('core/configuration'),
    componentFactory  = this.locator.locate('core/component/factory')

    return new UI(initialViewModel, treeFactory, hbs, channel, viewModelToTree, object, this.locator, configuration, componentFactory)
  }
}

module.exports = UILocator
