const TextInputComponent = require('.')

class TextInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextInputComponent
  }
}

module.exports = TextInputComponentLocator
