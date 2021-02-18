const Hydrator = require('.')

class HydratorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html }    = require('htm/preact'),
    { hydrate } = require('preact')

    return new Hydrator({ html, hydrator: hydrate, locator: this.locator })
  }
}

module.exports = HydratorLocator