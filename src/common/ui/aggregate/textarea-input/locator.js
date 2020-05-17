const TextAreaInputComponent = require('.')

class TextAreaInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextAreaInputComponent
  }
}

module.exports = TextAreaInputComponentLocator
