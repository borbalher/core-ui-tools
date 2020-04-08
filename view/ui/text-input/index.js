const Component = require('..')
class TextInputComponent extends Component
{
  validateInputData(textInputId)
  {
    const textInput = this.getComponent(textInputId)

    let errorMessage
    if(textInput.required && (!textInput.value || textInput.value.trim() === ''))
    {
      errorMessage = `Input is required`
    }
    else if(textInput.pattern)
    {
      const
      regexp = new RegExp(textInput.pattern),
      match  = regexp.exec(textInput.value)

      if(!match)
        errorMessage = textInput.title ? `Format must be ${textInput.title}` : `Format must be ${textInput.pattern}`
    }


    this.setComponent(textInputId, textInput)
    this.emit(textInputId, 'input.data.validated', { id: textInputId, errorMessage, isValid: !!errorMessage })
  }

  setInputData(textInputId, data)
  {
    const textInput = this.getComponent(textInputId)

    textInput.value  = data

    this.setComponent(textInputId, textInput)
    this.emit(textInputId, 'input.data.setted', { id: textInputId, data })
  }
}

module.exports = TextInputComponent
