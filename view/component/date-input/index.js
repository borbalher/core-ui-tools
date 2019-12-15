const Component = require('..')

class DateInputComponent extends Component
{
  constructor(dom, bus, moment)
  {
    super(dom, bus)
    this.moment = moment
  }

  validateInput(inputId)
  {
    const
    inputNode                        = this.getComponentNode(inputId),
    { required, value, placeholder } = inputNode

    if(required && (!value || value.trim() === ''))
    {
      inputNode.error        = true
      inputNode.errorMessage = `${inputNode.label} is required`
    }
    else if(value)
    {
      inputNode.error        = !this.moment.isDateValid(value, placeholder)
      inputNode.errorMessage = inputNode.error ? `${inputNode.label} must be in ${placeholder} format` : undefined
    }
    else
    {
      inputNode.error        = false
      inputNode.errorMessage = undefined
    }

    this.emit(inputId, 'input.validated', { id: inputId, error: inputNode.error, errorMessage: inputNode.errorMessage })
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

module.exports = DateInputComponent
