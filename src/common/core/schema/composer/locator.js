const Schema = require('.')

class ComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    deepmerge     = this.locator.locate('core/deepmerge'),
    deepclone     = this.locator.locate('core/deepclone'),
    deepfreeze    = this.locator.locate('core/deepfreeze'),
    configuration = this.locator.locate('core/configuration'),
    schemas       = configuration.find('core.schema.composer'),
    filters       = configuration.find('core.schema.filter'),
    validators    = configuration.find('core.schema.validator'),
    composer      = new Schema(this.locator, deepmerge, deepclone, deepfreeze, schemas, filters, validators)

    return composer
  }
}

module.exports = ComposerLocator
