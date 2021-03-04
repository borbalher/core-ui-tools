class IndexLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    Index    = require('.'),
    { html } = require('htm/preact'),
    ToDo     = this.locator.locate('view/component/todos')

    return Index({ html, ToDo })
  }
}

module.exports = IndexLocator
