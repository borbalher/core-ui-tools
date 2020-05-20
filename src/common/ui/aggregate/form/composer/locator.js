const FormComposer = require('.')

class FormComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.form')

    return new FormComposer(this.locator, options)
  }
}

module.exports = FormComposerLocator
