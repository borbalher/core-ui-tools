const Component = require('core-ui-tools/view/ui')
class TextInputComponent extends Component
{
  validateInputData(textInputGroupId)
  {
    const
    textInputGroup          = this.getComponent(textInputGroupId),
    { input, error, label } = textInputGroup

    if(input.required && (!input.value || input.value.trim() === ''))
    {
      error.message = `${label} is required`
    }
    else if(input.pattern)
    {
      const
      regexp = new RegExp(input.pattern),
      match  = regexp.exec(input.value)

      if(!match)
        error.message = `Format must be ${input.title}`
    }
    else
    {
      error.message = undefined
    }

    this.setComponent(textInputGroupId, textInputGroup)
    this.setComponent(input.id, input)
    this.setComponent(error.id, error)


    this.emit(textInputGroupId, 'input.data.validated', { id: textInputGroupId, isValid: !!error.message })
  }

  setInputData(textInputGroupId, data)
  {
    const { input } = this.getComponentJSON(textInputGroupId)

    input.value  = data

    this.setComponent(input.id, input)
    this.emit(textInputGroupId, 'input.data.setted', { id: textInputGroupId, data })
  }
}

module.exports = TextInputComponent
