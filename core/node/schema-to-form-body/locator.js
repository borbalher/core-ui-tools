const EntityToFormBody = require('.')

class EntityToFormBodyLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const fs = require('fs')

    return new EntityToFormBody(this.locator, fs)
  }
}

module.exports = EntityToFormBodyLocator
