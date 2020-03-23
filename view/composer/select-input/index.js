class SelectInputComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  selectItems(items, data)
  {
    return items.map((item) =>
    {
      item.selected = (item.id  === data || Array.isArray(data) && data.includes(item.id))
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
    autocomplete,
    placeholder,
    multiple,
    items
  })
  {
    const
    selectInput = this.componentComposer.create({
      id,
      error,
      label,
      disabled,
      multiple,
      readOnly,
      required,
      placeholder,
      autocomplete,
      schema : 'select-input',
      items  : this.selectItems(items, data)
    })

    return selectInput
  }
}

module.exports = SelectInputComposer
