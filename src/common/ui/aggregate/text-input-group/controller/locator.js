const TextInputGroupController = require('.')

class TextInputGroupControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TextInputGroupController
  }
}

module.exports = TextInputGroupControllerLocator
