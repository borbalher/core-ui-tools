class TextInputComposer
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
    autocomplete,
    placeholder,
    maxLength
  })
  {
    const textInput = this.componentComposer.create({
      data,
      maxLength,
      value,
      key,
      label,
      required,
      disabled,
      readOnly,
      error,
      errorMessage,
      autocomplete,
      placeholder,
      id,
      schema : 'text-input'
    })

    return textInput
  }
}

module.exports = TextInputComposer
