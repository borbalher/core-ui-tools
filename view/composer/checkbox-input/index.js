class CheckboxInputComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    label,
    name,
    value,
    data = value,
    required,
    disabled,
    readOnly,
    error,
    checked,
    template = 'checkbox-input'
  })
  {
    const checkboxInput = this.componentComposer.create({
      id,
      label,
      name,
      value,
      required,
      data,
      disabled,
      readOnly,
      error,
      checked,
      template,
      schema : 'checkbox-input'
    })

    return checkboxInput
  }
}

module.exports = CheckboxInputComposer
