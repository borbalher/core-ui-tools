class ButtonGroupInputComposer
{
  constructor(deepclone, componentComposer, errorComposer)
  {
    this.deepclone          = deepclone
    this.componentComposer  = componentComposer
    this.errorComposer      = errorComposer
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
      error  : this.errorComposer.create({
        id   : `${id}_error`,
        name : 'error'
      }),
      schema  : 'button-group-input',
      buttons : this.selectButton(buttons, value)
    })

    return buttonGroupInput
  }
}

module.exports = ButtonGroupInputComposer
