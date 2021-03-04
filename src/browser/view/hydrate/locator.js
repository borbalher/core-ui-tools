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
    { hydrate, render } = require('preact')

    return new Hydrator({ html, hydrator: hydrate, render, locator: this.locator })
  }
}

module.exports = HydratorLocator