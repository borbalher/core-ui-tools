const ComponentController = require('common/ui/aggregate/component/controller')

class PasswordInputGroupController extends ComponentController
{
  validateInput(value)
  {
    const
    passwordInputGroup = this.getControllerContext(),
    { input: { required, pattern, title }, label } = passwordInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
      {
        message = title ? title : `Format invalid`
        code    = 'E_INPUT_FORMAT_INVALID'
      }
    }

    this.setControllerContext({
      ...passwordInputGroup,
      input :
      {
        ...passwordInputGroup.input,
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

module.exports = PasswordInputGroupController
