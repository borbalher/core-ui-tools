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
    configuration     = this.locator.locate('core/configuration').find('core.page'),
    id                = configuration['id'],
    initialViewModel  = configuration['state'],
    schema            = configuration['schema'],
    composer          = this.locator.locate(`view-model/${id}/composer`),
    channel           = this.locator.locate('infrastructure/bus').createChannel('view-model'),
    normalizer        = this.locator.locate('core/normalizer'),
    eventComposer     = this.locator.locate('core/event/composer')

    return new ViewModel({
      initialViewModel,
      eventComposer,
      normalizer,
      composer,
      channel,
      schema,
      id
    })
  }
}

module.exports = ViewModelLocator
