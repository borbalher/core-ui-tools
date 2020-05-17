const ComponentController = require('common/ui/component/controller')

class TextInputGroupController extends ComponentController
{
  validateInput(value)
  {
    const
    textInputGroup = this.getControllerContext(),
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

    this.setControllerContext({
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

    this.emit('input.validated', { value, isValid: !message })
  }
}

module.exports = TextInputGroupController
