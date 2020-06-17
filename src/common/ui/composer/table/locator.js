const TableComposer = require('.')

class TableComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new TableComposer(configuration)
  }
}

module.exports = TableComposerLocator
