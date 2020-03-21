const Component = require('..')
class TextInputComponent extends Component
{
  validateInput(inputId)
  {
    const textInput = this.getComponent(inputId)

    if(textInput.required && (!textInput.data || textInput.data.trim() === ''))
    {
      textInput.error        = true
      textInput.errorMessage = `${textInput.label} is required`
    }
    else
    {
      textInput.error        = false
      textInput.errorMessage = undefined
    }

    this.emit(inputId, 'input.validated', { id: inputId, hasError: textInput.error })
    this.setComponent(inputId, textInput)
  }

  setInputValue(inputId, value)
  {
    const textInput = this.getComponent(inputId)
    textInput.data  = value

    this.emit(inputId, 'input.value.setted', { id: inputId, value })
    this.setComponent(inputId, inputNode)
  }
}

module.exports = TextInputComponent
