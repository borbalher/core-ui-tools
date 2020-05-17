const ComponentController = require('common/ui/aggregate/component/controller')

class RadioButtonInputGroupController extends ComponentController
{
  buttonClicked(value)
  {
    const buttonGroupInputGroup = this.getControllerContext()

    this.setControllerContext({
      ...buttonGroupInputGroup,
      value
    })
  }
}

module.exports = RadioButtonInputGroupController
