const Page = require('.')

class PageLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const { html } = require('htm/preact')

    return new Page({
      html,
      locator : this.locator
    })
  }
}

module.exports = PageLocator
