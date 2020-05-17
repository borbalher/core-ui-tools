const TextAreaInputGroupComponent = require('.')

class TextAreaInputGroupComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextAreaInputGroupComponent
  }
}

module.exports = TextAreaInputGroupComponentLocator
