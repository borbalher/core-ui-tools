class ButtonGroupInputComposer
{
  constructor(deepclone, componentComposer)
  {
    this.deepclone          = deepclone
    this.componentComposer  = componentComposer
  }

  selectButton(items, value)
  {
    return items.map((item) =>
    {
      if(typeof value === 'string')
        item.selected = value === item.id
      else if(Array.isArray(value))
        item.selected = value.includes(item.id)
      else
        item.selected = false

      return item
    })
  }

  create({
    id,
    label,
    value,
    data = value,
    required,
    disabled,
    readOnly,
    error,
    errorMessage,
    buttons
  })
  {
    const buttonGroupInput = this.componentComposer.create({
      id,
      label,
      required,
      data,
      disabled,
      readOnly,
      error,
      errorMessage,
      schema  : 'button-group-input',
      buttons : this.selectButton(buttons, value)
    })

    return buttonGroupInput
  }
}

module.exports = ButtonGroupInputComposer
