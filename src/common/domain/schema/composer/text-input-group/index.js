/**
 * TextInputGroup composer
 * @class
 */
class TextInputGroupComposer
{
  constructor(componentComposer, textInputComposer, options)
  {
    this.componentComposer   = componentComposer
    this.textInputComposer = textInputComposer
    this.bindings            = options && options.bindings  ? options.bindings : []
    this.listeners           = options && options.listeners ? options.listeners : []
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    title,
    value,
    name,
    id
  })
  {
    const textInputGroup = this.componentComposer.compose({
      template : 'input-group',
      schema   : 'entity/text-input-group',
      input    : {
        parentId : id,
        id       : `${id}-text-input`,
        name     : 'input',
        attribute,
        required,
        disabled,
        readonly,
        title,
        value
      },
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
      required,
      disabled,
      readonly,
      parentId,
      classes,
      title,
      value,
      name,
      id
    })

    return textInputGroup
  }
}

module.exports = TextInputGroupComposer
