const Form = require('.')

class FormLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html } = require('htm/preact')

    return Form({
      html
    })
  }
}

module.exports = FormLocator
