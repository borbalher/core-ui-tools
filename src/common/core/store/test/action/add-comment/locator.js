const AddCommentAction = require('.')

class AddCommentActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')

    return new AddCommentAction(store)
  }
}

module.exports = AddCommentActionLocator
