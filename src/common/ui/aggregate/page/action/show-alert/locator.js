const ShowAlertAction = require('.')

class ShowAlertActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ShowAlertAction()
  }
}

module.exports = ShowAlertActionLocator
