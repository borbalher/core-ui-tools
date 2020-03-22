const Component = require('..')
class TextInputComponent extends Component
{
  validateInputData(textInputId)
  {
    const textInput = this.getComponent(textInputId)

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

    this.emit(textInputId, 'input.data.validated', { id: textInputId, hasError: textInput.error })
    this.setComponent(textInputId, textInput)
  }

  setInputData(textInputId, data)
  {
    const textInput = this.getComponent(textInputId)
    textInput.data  = data

    this.emit(textInputId, 'input.data.setted', { id: textInputId, data })
    this.setComponent(textInputId, inputNode)
  }
}

module.exports = TextInputComponent
