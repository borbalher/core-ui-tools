class DateInputComposer
{
  constructor(componentComposer, moment)
  {
    this.componentComposer = componentComposer
    this.moment            = moment
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
    maxLength
  })
  {
    const
    placeholder = this.moment.getDateOnlyPlaceholder(),
    dateInput   = this.componentComposer.create({
      maxLength,
      value,
      key,
      data,
      label,
      required,
      disabled,
      readOnly,
      error,
      errorMessage,
      autocomplete,
      placeholder,
      id,
      schema : 'date-input'
    })

    return dateInput
  }
}

module.exports = DateInputComposer
