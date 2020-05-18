const TestComposer = require('.')

class TestComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new TestComposer(this.locator, configuration)
  }
}

module.exports = TestComposerLocator
