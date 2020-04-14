const FormComponent = require('.')

class FormComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('infrastructure/bus')

    return new FormComponent(ui, bus)
  }
}

module.exports = FormComponentLocator
