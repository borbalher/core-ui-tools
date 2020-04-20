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
