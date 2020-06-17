const FormComposer = require('.')

class FormComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new FormComposer(configuration)
  }
}

module.exports = FormComposerLocator
