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
    required,
    disabled,
    readOnly,
    error,
    errorMessage,
    buttons
  })
  {
    const
    buttonGroupButtons = this.deepclone.clone(buttons),
    buttonGroupInput   = this.componentComposer.create({
      id,
      label,
      required,
      disabled,
      readOnly,
      error,
      errorMessage,
      schema  : 'button-group-input',
      buttons : this.selectButton(buttonGroupButtons, value)
    })

    return buttonGroupInput
  }
}

module.exports = ButtonGroupInputComposer
