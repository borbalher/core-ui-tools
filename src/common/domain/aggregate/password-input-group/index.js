const Component = require('../component')
class PasswordInputGroupComponent extends Component
{
  validateInputData(passwordInputGroupId)
  {
    const
    passwordInputGroup      = this.getComponentContext(passwordInputGroupId),
    { input, error, label } = passwordInputGroup

    if(input.required && (!input.value || input.value.trim() === ''))
      passwordInputGroup.error = { message: `${label} is required` }
    else
      passwordInputGroup.error  = undefined

    this.setComponent(passwordInputGroupId, passwordInputGroup)
    this.emit(passwordInputGroupId, 'input.data.validated', { id: passwordInputGroupId, isValid: !!error.message })
  }

  setInputData(passwordInputGroupId, data)
  {
    const passwordInputGroup = this.getComponentContext(passwordInputGroupId)

    passwordInputGroup.input.value  = data

    this.setComponent(passwordInputGroupId, passwordInputGroup)
    this.emit(passwordInputGroupId, 'input.data.setted', { id: passwordInputGroupId, data })
  }
}

module.exports = PasswordInputGroupComponent
