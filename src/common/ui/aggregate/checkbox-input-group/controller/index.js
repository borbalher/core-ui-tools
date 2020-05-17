const Component = require('common/ui/aggregate/component')

class CheckboxInputGroupComponent extends Component
{
  validateInput(value)
  {
    const
    checkboxInputGroup = this.getComponentContext(),
    { input: { required }, label } = checkboxInputGroup

    let
    message = null,
    code    = null

    if(required && !value)
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    this.setComponentContext({
      ...checkboxInputGroup,
      input :
      {
        ...checkboxInputGroup.input,
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

module.exports = CheckboxInputGroupComponent
