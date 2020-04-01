class TextInputComposer
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
    autocomplete,
    placeholder,
    maxLength,
    regexp
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
      error  : this.errorComposer.create({
        id   : `${id}_error`,
        name : 'error'
      }),
      autocomplete,
      placeholder,
      id,
      regexp,
      schema : 'text-input'
    })

    return textInput
  }
}

module.exports = TextInputComposer
