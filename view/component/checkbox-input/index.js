const Component = require('..')
class CheckboxInputComponent extends Component
{
  validateInput(inputId)
  {
    const inputNode = this.getComponentNode(inputId)

    if(inputNode.required && !inputNode.value)
    {
      inputNode.error        = true
      inputNode.errorMessage = `${inputNode.label} is required`
    }
    else
    {
      inputNode.error        = false
      inputNode.errorMessage = undefined
    }

    this.emit(inputId, 'input.validated', { id: inputId, hasError: inputNode.error })
    this.setComponentNode(inputId, inputNode)
  }

  setInputValue(inputId, value)
  {
    const inputNode = this.getComponentNode(inputId)
    inputNode.value = value

    this.emit(inputId, 'input.value.setted', { id: inputId, value })
    this.setComponentNode(inputId, inputNode)
  }
}

module.exports = CheckboxInputComponent
