const
Hydrator            = require('.'),
{ html }            = require('htm/preact'),
{ hydrate, render } = require('preact')

class HydratorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const App = this.locator.locate(`view/app`)

    return new Hydrator({ html, App, hydrator: hydrate, render })
  }
}

module.exports = HydratorLocator