const TestComposer = require('.')

class TestComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.test')

    return new TestComposer(this.locator, options)
  }
}

module.exports = TestComposerLocator
