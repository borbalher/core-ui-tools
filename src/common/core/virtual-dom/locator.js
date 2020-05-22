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
    initialViewModel     = configuration['state'],
    schema               = configuration['schema'],
    controllerRepository = this.locator.locate('infrastructure/controller/repository'),
    componentFactory     = this.locator.locate('ui/component/controller/factory'),
    treeFactory          = this.locator.locate('data-structure/tree'),
    composer             = this.locator.locate(`view-model/${id}/composer`),
    jsonToTree           = this.locator.locate('data-structure/json-to-graph/factory').create('entity/component'),
    channel              = this.locator.locate('infrastructure/bus').createChannel('virtual-dom'),
    object               = this.locator.locate('core/object'),
    eventComposer        = this.locator.locate('core/event/composer')

    return new VirtualDOM({
      controllerRepository,
      initialViewModel,
      componentFactory,
      eventComposer,
      treeFactory,
      jsonToTree,
      composer,
      channel,
      object,
      schema,
      id
    })
  }
}

module.exports = VirtualDOMLocator
