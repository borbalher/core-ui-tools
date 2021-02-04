const Clock = require('.')

class ClockLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html, Component } = require('htm/preact')

    return Clock({ html, Component })
  }
}

module.exports = ClockLocator
