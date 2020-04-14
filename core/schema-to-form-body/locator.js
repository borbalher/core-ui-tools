const EntityToFormBody = require('.')

class EntityToFormBodyLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    fs            = require('fs'),
    path          = require('path'),
    configuration = this.locator.locate('core/configuration'),
    schemas       = configuration.find('core.schema.composer')

    return new EntityToFormBody(this.locator, fs, schemas, path)
  }
}

module.exports = EntityToFormBodyLocator
