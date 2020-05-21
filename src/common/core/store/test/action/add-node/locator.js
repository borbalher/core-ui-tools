const AddNodeAction = require('.')

class AddNodeActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')

    return new AddNodeAction(store)
  }
}

module.exports = AddNodeActionLocator
