const FormComposer = require('.')

class FormComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new FormComposer(this.locator)
  }
}

module.exports = FormComposerLocator
