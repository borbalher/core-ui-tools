class PasswordInputComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    key,
    label,
    value,
    required,
    disabled,
    readOnly,
    error,
    errorMessage,
    placeholder
  })
  {
    const textInput = this.componentComposer.create({
      value,
      key,
      label,
      required,
      disabled,
      readOnly,
      error,
      errorMessage,
      placeholder,
      id,
      schema : 'password-input'
    })

    return textInput
  }
}

module.exports = PasswordInputComposer
