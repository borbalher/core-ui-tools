const Component = require('../component')

class PasswordInputGroupComponent extends Component
{
  validateInput(passwordInputGroupId, value)
  {
    const
    passwordInputGroup = this.getComponentContext(passwordInputGroupId),
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

    if(message)
    {
      document.getElementById(passwordInputGroupId).querySelector('.input-group__error').innerHTML = message
      document.getElementById(passwordInputGroupId).classList.add('--error')
    }
    else
    {
      document.getElementById(passwordInputGroupId).querySelector('.input-group__error').innerHTML = ''
      document.getElementById(passwordInputGroupId).classList.remove('--error')
    }

    this.setComponent(passwordInputGroupId, {
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

    this.emit(passwordInputGroupId, 'input.validated', { value, isValid: !message })
  }
}

module.exports = PasswordInputGroupComponent
