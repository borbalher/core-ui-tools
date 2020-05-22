const ErrorComposer = require('.')

class ErrorComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.error')

    return new ErrorComposer(this.locator, options)
  }
}

module.exports = ErrorComposerLocator
