class SelectInputComposer
{
  constructor(deepclone, componentComposer)
  {
    this.deepclone          = deepclone
    this.componentComposer  = componentComposer
  }

  selectItems(items, value)
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
    autocomplete,
    placeholder,
    canUnselect,
    multiple,
    items
  })
  {
    const
    selectInputItems = this.deepclone.clone(items),
    selectInput      = this.componentComposer.create({
      id,
      label,
      required,
      disabled,
      readOnly,
      error,
      errorMessage,
      autocomplete,
      placeholder,
      canUnselect,
      multiple,
      schema : 'select-input',
      items  : this.selectItems(selectInputItems, value)
    })

    return selectInput
  }
}

module.exports = SelectInputComposer
