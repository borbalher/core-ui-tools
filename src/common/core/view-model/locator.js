const ViewModel = require('.')

class ViewModelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration').find('core.view-model'),
    id                = configuration['id'],
    initialViewModel  = configuration['state'],
    schema            = configuration['schema'],
    composer          = this.locator.locate(`ui/${schema}/composer`),
    jsonToTree        = this.locator.locate('data-structure/json-to-tree'),
    treeFactory       = this.locator.locate('data-structure/tree'),
    channel           = this.locator.locate('infrastructure/bus').createChannel('view-model')

    return new ViewModel({
      initialViewModel,
      treeFactory,
      jsonToTree,
      composer,
      channel,
      schema,
      id
    })
  }
}

module.exports = ViewModelLocator
