const Component = require('../component')

class SelectInputGroupComponent extends Component
{
  validateInput(value)
  {
    const
    selectInputGroup = this.getComponentConselect(),
    { input: { required, items }, label } = selectInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.length === 0))
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

    this.setComponentConselect({
      ...selectInputGroup,
      input :
      {
        ...selectInputGroup.input,
        items : items.map((item) =>
        {
          return {
            ...item,
            selected : value.indexOf(item.id) !== -1
          }
        }),
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

module.exports = SelectInputGroupComponent
