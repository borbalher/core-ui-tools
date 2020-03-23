const Component = require('..')
class PasswordInputComponent extends Component
{
  validateInputData(passwordInputId)
  {
    const passwordInput = this.getComponent(passwordInputId)

    if(passwordInput.required && (!passwordInput.data || passwordInput.data.trim() === ''))
    {
      document.querySelector(`#${passwordInput.id} .input-group`).classList.add('--error')
      this.emit(passwordInputId, 'input.data.validated', { id: passwordInputId, hasError: true, message: `${passwordInput.label} is required` })
    }
    else
    {
      document.querySelector(`#${passwordInput.id} .input-group`).classList.remove('--error')
      this.emit(passwordInputId, 'input.data.validated', { id: passwordInputId, hasError: false })
    }

    this.setComponent(passwordInputId, passwordInput)
  }

  setInputData(passwordInputId, data)
  {
    const passwordInput = this.getComponent(passwordInputId)
    passwordInput.data  = data

    this.emit(passwordInputId, 'input.data.setted', { id: passwordInputId, data })
    this.setComponent(passwordInputId, passwordInput)
  }
}

module.exports = PasswordInputComponent
