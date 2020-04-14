const Component = require('../component')

class TextInputGroupComponent extends Component
{
  validateInput(textInputGroupId, value)
  {
    const
    textInputGroup = this.getComponentContext(textInputGroupId),
    { input: { required, pattern, title }, label } = textInputGroup

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
      document.getElementById(textInputGroupId).querySelector('.input-group__error').innerHTML = message
      document.getElementById(textInputGroupId).classList.add('--error')
    }
    else
    {
      document.getElementById(textInputGroupId).querySelector('.input-group__error').innerHTML = ''
      document.getElementById(textInputGroupId).classList.remove('--error')
    }

    this.setComponent(textInputGroupId, {
      ...textInputGroup,
      input :
      {
        ...textInputGroup.input,
        value
      },
      error :
      {
        message,
        code
      }
    })

    this.emit(textInputGroupId, 'input.validated', { value, isValid: !message })
  }
}

module.exports = TextInputGroupComponent
