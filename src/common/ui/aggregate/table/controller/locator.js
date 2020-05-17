const TableController = require('.')

class TableControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TableController
  }
}

module.exports = TableControllerLocator
