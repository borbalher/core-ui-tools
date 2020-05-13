/**
 * SelectInput composer
 * @class
 */
class SelectInputComposer
{
  constructor(componentComposer, options)
  {
    this.componentComposer = componentComposer
    this.bindings          = options && options.bindings  ? options.bindings : []
    this.listeners         = options && options.listeners ? options.listeners : []
  }

  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    items,
    title,
    value,
    name,
    id
  })
  {
    const selectInput = this.componentComposer.compose({
      template : 'select-input',
      schema   : 'entity/select-input',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      attribute,
      disabled,
      parentId,
      required,
      readonly,
      classes,
      items,
      title,
      value,
      name,
      id
    })

    return selectInput
  }
}

module.exports = SelectInputComposer
