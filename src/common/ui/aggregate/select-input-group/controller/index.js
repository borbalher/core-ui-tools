const ComponentController = require('common/ui/aggregate/component/controller')

class SelectInputGroupController extends ComponentController
{
  validateInput(value)
  {
    const
    selectInputGroup = this.getControllerContext(),
    { input: { required }, label } = selectInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.length === 0))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    this.setControllerContext({
      ...selectInputGroup,
      input :
      {
        ...selectInputGroup.input,
        value
      },
      error :
      {
        message,
        code
      }
    })

    this.emit('input.validated', { value, isValid: !message })
  }
}

module.exports = SelectInputGroupController
