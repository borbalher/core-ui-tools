const Component = require('../component')

class TextAreaInputGroupComponent extends Component
{
  validateInput(value)
  {
    const
    textAreaInputGroup = this.getComponentContext(),
    { input: { required }, label } = textAreaInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
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
      ...textAreaInputGroup,
      input :
      {
        ...textAreaInputGroup.input,
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

module.exports = TextAreaInputGroupComponent
