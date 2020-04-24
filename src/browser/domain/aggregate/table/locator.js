const TableComponent = require('.')

class TableComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return TableComponent
  }
}

module.exports = TableComponentLocator
