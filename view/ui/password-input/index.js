const Component = require('..')
class PasswordInputComponent extends Component
{
  validateInputData(passwordInputId)
  {
    const passwordInput = this.getComponent(passwordInputId)

    if(passwordInput.required && (!passwordInput.value || passwordInput.value.trim() === ''))
    {
      passwordInput.error        = true
      passwordInput.errorMessage = `${passwordInput.label} is required`
    }
    else
    {
      passwordInput.error        = false
      passwordInput.errorMessage = undefined
    }

    this.emit(passwordInputId, 'input.data.validated', { id: passwordInputId, hasError: passwordInput.error })
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
