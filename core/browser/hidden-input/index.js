const Component = require('..')
class HiddenInputComponent extends Component
{
  validateInputData(hiddenInputId)
  {
    const hiddenInput = this.getComponent(hiddenInputId)

    if(hiddenInput.required && (!hiddenInput.data || hiddenInput.data.trim() === ''))
    {
      document.querySelector(`#${hiddenInput.id} .input-group`).classList.add('--error')
      this.emit(hiddenInputId, 'input.data.validated', { id: hiddenInputId, hasError: true, message: `${hiddenInput.label} is required` })
    }
    else
    {
      document.querySelector(`#${hiddenInput.id} .input-group`).classList.remove('--error')
      this.emit(hiddenInputId, 'input.data.validated', { id: hiddenInputId, hasError: false })
    }

    this.setComponent(hiddenInputId, hiddenInput)
  }

  setInputData(hiddenInputId, data)
  {
    const hiddenInput = this.getComponent(hiddenInputId)
    hiddenInput.data  = data

    document.querySelector(`#${hiddenInput.id} .input-group__input`).value = data
    this.emit(hiddenInputId, 'input.data.setted', { id: hiddenInputId, data })
    this.setComponent(hiddenInputId, hiddenInput)
  }
}

module.exports = HiddenInputComponent
