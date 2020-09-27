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
    actionComposer         = this.locator.locate('core/action/composer'),
    bus                    = this.locator.locate('infrastructure/bus'),
    composer               = this.locator.locate('core/schema/composer'),
    deepfind               = this.locator.locate('core/deepfind'),
    eventComposer          = this.locator.locate('core/event/composer'),
    hbs                    = this.locator.locate('view/handlebars'),
    store                  = this.locator.locate('core/store'),
    templateFactory        = this.locator.locate('view/template/factory'),
    template               = templateFactory.create({
      tag : 'text-input-group'
    })

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
      template,
    }))
  }
}

module.exports = TextInputGroupBootstrap
