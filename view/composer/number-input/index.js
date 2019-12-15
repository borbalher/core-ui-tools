class NumberInputComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    max,
    min,
    step,
    acceptNegatives,
    acceptDecimals,
    maxDecimals,
    unit,
    value,
    key,
    label,
    required,
    disabled,
    readOnly,
    error,
    errorMessage,
    placeholder,
    id
  })
  {
    const numberInput = this.componentComposer.create({
      max,
      min,
      step,
      acceptNegatives,
      acceptDecimals,
      maxDecimals,
      unit,
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
      schema : 'number-input'
    })

    return numberInput
  }
}

module.exports = NumberInputComposer
