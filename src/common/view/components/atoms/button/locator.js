const Button = require('.')

class ButtonLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html } = require('htm/preact')

    return Button({ html })
  }
}

module.exports = ButtonLocator
