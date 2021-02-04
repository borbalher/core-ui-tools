const ToDosComponent = require('.')

class ToDosComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const { html, Component } = require('htm/preact')

    return ToDosComponent({ html, Component })
  }
}

module.exports = ToDosComponentLocator
