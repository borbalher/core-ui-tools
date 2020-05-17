const TextareaInputController = require('.')

class TextareaInputControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextareaInputController
  }
}

module.exports = TextareaInputControllerLocator
