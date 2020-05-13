/**
 * CheckboxInput composer
 * @class
 */
class CheckboxInputComposer
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
    title,
    value,
    name,
    id
  })
  {
    const checkboxInput = this.componentComposer.compose({
      template : 'checkbox-input',
      schema   : 'entity/checkbox-input',
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
      title,
      value,
      name,
      id
    })

    return checkboxInput
  }
}

module.exports = CheckboxInputComposer
