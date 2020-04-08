const Component = require('core-ui-tools/core/browser/text-input-group/node_modules/core-ui-tools/view/ui')
class TextInputGroupComponent extends Component
{
  validateInputData(textInputGroupId)
  {
    const
    textInputGroup          = this.getComponentJSON(textInputGroupId),
    { input, error, label } = textInputGroup

    if(input.required && (!input.value || input.value.trim() === ''))
    {
      textInputGroup.error = { message: `${label} is required` }
    }
    else if(input.pattern)
    {
      const
      regexp = new RegExp(input.pattern),
      match  = regexp.exec(input.value)

      if(!match)
        textInputGroup.error = { message: input.title ? `Format must be ${input.title}` : 'Format invalid' }
    }
    else
    {
      textInputGroup.error  = undefined
    }

    this.setComponent(textInputGroupId, textInputGroup)
    this.emit(textInputGroupId, 'input.data.validated', { id: textInputGroupId, isValid: !!error.message })
  }

  setInputData(textInputGroupId, data)
  {
    const textInputGroup = this.getComponentJSON(textInputGroupId)

    textInputGroup.input.value  = data

    this.setComponent(textInputGroupId, textInputGroup)
    this.emit(textInputGroupId, 'input.data.setted', { id: textInputGroupId, data })
  }
}

module.exports = TextInputGroupComponent
