const VirtualDOM = require('.')

class VirtualDOMLocator
{
  constructor(locator)
  {
    this.locator = locator
  }
  locate()
  {
    const
    configuration        = this.locator.locate('core/configuration').find('core.page'),
    id                   = configuration['id'],
    initialViewModel     = configuration['viewModel'],
    schema               = configuration['schema'],
    controllerRepository = this.locator.locate('infrastructure/controller/repository'),
    componentFactory     = this.locator.locate('ui/component/controller/factory'),
    treeFactory          = this.locator.locate('data-structure/tree'),
    composer             = this.locator.locate(`view-model/${id}/composer`),
    jsonToTree           = this.locator.locate('data-structure/json-to-tree/factory').create('entity/component'),
    channel              = this.locator.locate('infrastructure/bus').createChannel('virtual-dom'),
    object               = this.locator.locate('core/object'),
    eventComposer        = this.locator.locate('core/event/composer'),
    deepfind             = this.locator.locate('core/deepfind'),
    store                = this.locator.locate('core/store')

    return new VirtualDOM({
      controllerRepository,
      initialViewModel,
      componentFactory,
      eventComposer,
      treeFactory,
      jsonToTree,
      composer,
      deepfind,
      channel,
      object,
      schema,
      store,
      id
    })
  }
}

module.exports = VirtualDOMLocator
