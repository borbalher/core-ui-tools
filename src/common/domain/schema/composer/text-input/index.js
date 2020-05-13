/**
 * TextInput composer
 * @class
 */
class TextInputComposer
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
    const textInput = this.componentComposer.compose({
      template : 'text-input',
      schema   : 'entity/text-input',
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

    return textInput
  }
}

module.exports = TextInputComposer
