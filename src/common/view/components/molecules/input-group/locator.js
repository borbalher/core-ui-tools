const InputGroup = require('.')

class InputGroupLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html }             = require('htm/preact'),
    internationalization = this.locator.locate('core/internationalization'),
    Label                = this.locator.locate('view/atoms/label')

    return InputGroup({ html, internationalization, Label })
  }
}

module.exports = InputGroupLocator
