const Component = require('../component')
class TextInputGroupComponent extends Component
{
  validateInputData(textInputGroupId)
  {
    const
    textInputGroup   = this.getComponentContext(textInputGroupId),
    { input, label } = textInputGroup

    if(input.required && (!input.value || input.value.trim() === ''))
    {
      textInputGroup.error = { message: `${label} is required`, code: 'E_INPUT_REQUIRED' }
    }
    else if(input.pattern)
    {
      const
      regexp = new RegExp(input.pattern),
      match  = regexp.exec(input.value)

      if(!match)
        textInputGroup.error = { message: input.title ? `Format must be ${input.title}` : 'Format invalid', code: 'E_INPUT_FORMAT_INVALID' }
    }
    else
    {
      textInputGroup.error  = { }
    }

    this.setComponent(textInputGroupId, textInputGroup)
    this.emit(textInputGroupId, 'input.data.validated', { id: textInputGroupId, isValid: !!textInputGroup.error.message })
  }

  setInputData(textInputGroupId, data)
  {
    const textInputGroup = this.getComponentContext(textInputGroupId)

    textInputGroup.input.value  = data

    this.setComponent(textInputGroupId, textInputGroup)
    this.emit(textInputGroupId, 'input.data.setted', { id: textInputGroupId, data })
  }
}

module.exports = TextInputGroupComponent
