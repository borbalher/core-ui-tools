const ActionComposer = require('.')

class ActionComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }


  locate()
  {
    return new ActionComposer()
  }
}

module.exports = ActionComposerLocator
