const TextInputGroupComponent = require('.')

class TextInputGroupComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextInputGroupComponent
  }
}

module.exports = TextInputGroupComponentLocator
