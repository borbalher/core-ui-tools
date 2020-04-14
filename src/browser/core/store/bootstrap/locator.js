const StoreBootstrap = require('.')

class StoreBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store       = this.locator.locate('core/store'),
    repository  = this.locator.locate('infrastructure/sys02-rebuild/repository')

    return new StoreBootstrap(repository, store)
  }
}

module.exports = StoreBootstrapLocator
