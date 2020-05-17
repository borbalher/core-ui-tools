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
    id                  = `${new URL(window.location.href).pathname.slice(1)}-page`,
    componentRepository = this.locator.locate('infrastructure/component/factory'),
    jsonToTree          = this.locator.locate('data-structure/json-to-tree'),
    componentFactory    = this.locator.locate('ui/component/factory'),
    treeFactory         = this.locator.locate('data-structure/tree'),
    configuration       = this.locator.locate('core/configuration'),
    object              = this.locator.locate('core/object'),
    initialViewModel    = this.getInitialViewModel()

    return new UI(id, initialViewModel, treeFactory, jsonToTree, object, configuration, componentFactory, componentRepository, this.locator)
  }
}

module.exports = UILocator
