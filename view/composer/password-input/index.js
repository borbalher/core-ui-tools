class PasswordInputComposer
{
  constructor(componentComposer, errorComposer)
  {
    this.componentComposer = componentComposer
    this.errorComposer     = errorComposer
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
      data,
      value,
      placeholder,
      id,
      error  : this.errorComposer.create({
        id   : `${id}_error`,
        name : 'error'
      }),
      schema : 'password-input'
    })

    return textInput
  }
}

module.exports = PasswordInputComposer
