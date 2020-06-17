const TableActionMapper = require('.')

class TableActionMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TableActionMapper()
  }
}

module.exports = TableActionMapperLocator
