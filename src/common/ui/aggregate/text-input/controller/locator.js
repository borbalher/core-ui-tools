const TextInputController = require('.')

class TextInputControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextInputController
  }
}

module.exports = TextInputControllerLocator
