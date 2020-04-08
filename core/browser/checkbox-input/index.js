const Component = require('..')
class CheckboxInputComponent extends Component
{
  validateInputData(checkboxInputId)
  {
    const checkboxInput = this.getComponent(checkboxInputId)

    if(checkboxInput.required && !checkboxInput.data)
    {
      checkboxInput.error        = true
      checkboxInput.errorMessage = `${checkboxInput.label} is required`
    }
    else
    {
      checkboxInput.error        = false
      checkboxInput.errorMessage = undefined
    }

    this.emit(checkboxInputId, 'input.data.validated', { id: checkboxInputId, hasError: checkboxInput.error })
    this.setComponent(checkboxInputId, checkboxInput)
  }

  setInputData(checkboxInputId, data)
  {
    const checkboxInput = this.getComponent(checkboxInputId)
    checkboxInput.data  = data

    this.emit(checkboxInputId, 'input.data.setted', { id: checkboxInputId, data })
    this.setComponent(checkboxInputId, checkboxInput)
  }
}

module.exports = CheckboxInputComponent
