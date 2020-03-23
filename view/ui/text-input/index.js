const Component = require('..')
class TextInputComponent extends Component
{
  validateInputData(textInputId)
  {
    const textInput = this.getComponent(textInputId)

    if(textInput.required && (!textInput.data || textInput.data.trim() === ''))
    {
      document.querySelector(`#${textInput.id} .input-group`).classList.add('--error')
      this.emit(textInputId, 'input.data.validated', { id: textInputId, hasError: true, message: `${textInput.label} is required` })
    }
    else
    {
      document.querySelector(`#${textInput.id} .input-group`).classList.remove('--error')
      this.emit(textInputId, 'input.data.validated', { id: textInputId, hasError: false })
    }

    this.setComponent(textInputId, textInput)
  }

  setInputData(textInputId, data)
  {
    const textInput = this.getComponent(textInputId)
    textInput.data  = data

    document.querySelector(`#${textInput.id} .input-group__input`).value = data
    this.emit(textInputId, 'input.data.setted', { id: textInputId, data })
    this.setComponent(textInputId, textInput)
  }
}

module.exports = TextInputComponent
