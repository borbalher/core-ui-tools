const TableComposer = require('.')

class TableComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TableComposer(this.locator)
  }
}

module.exports = TableComposerLocator
