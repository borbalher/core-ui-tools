const Component = require('../component')

class PasswordInputGroupComponent extends Component
{
  validateInput(value)
  {
    const
    passwordInputGroup = this.getComponentContext(),
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

    const domInputGroup = document.getElementById(this[Symbol.for('id')])
    if(message)
    {
      domInputGroup.querySelector('.input-group__error').innerHTML = message
      domInputGroup.classList.add('--error')
    }
    else
    {
      domInputGroup.querySelector('.input-group__error').innerHTML = ''
      domInputGroup.classList.remove('--error')
    }

    this.setComponentContext({
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
