const ReloadAction = require('.')

class ReloadActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ReloadAction()
  }
}

module.exports = ReloadActionLocator
