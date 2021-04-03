const Label = require('.')

class LabelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html }             = require('htm/preact'),
    internationalization = this.locator.locate('core/internationalization')

    return Label({ html, internationalization })
  }
}

module.exports = LabelLocator
