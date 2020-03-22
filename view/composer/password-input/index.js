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
    data = value,
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
      data,
      value,
      errorMessage,
      placeholder,
      id,
      schema : 'password-input'
    })

    return textInput
  }
}

module.exports = PasswordInputComposer
