const TextInputGroup = require('..')

class TextInputGroupBootstrap
{
  constructor(locator)
  {
    this.locator = locator
  }

  bootstrap()
  {
    const
    actionComposer = this.locator.locate('core/action/composer'),
    bus            = this.locator.locate('infrastructure/bus'),
    composer       = this.locator.locate('core/schema/composer'),
    deepfind       = this.locator.locate('core/deepfind'),
    eventComposer  = this.locator.locate('core/event/composer'),
    hbs            = this.locator.locate('view/handlebars'),
    store          = this.locator.locate('core/store')

    customElements.define('text-input-group', TextInputGroup({
      actionComposer,
      bus,
      composer,
      deepfind,
      eventComposer,
      hbs,
      schema : 'entity/text-input-group',
      store,
      tag    : 'text-input-group',
    }))
  }
}

module.exports = TextInputGroupBootstrap
