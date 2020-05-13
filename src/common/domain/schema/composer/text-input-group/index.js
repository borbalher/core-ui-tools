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
    const
    textInput = this.textInputComposer.compose({
      renderonchange : false,
      parentId       : id,
      id             : `${id}-text-input`,
      name           : 'input',
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    textInputGroup = this.componentComposer.compose({
      template : 'input-group',
      schema   : 'entity/text-input-group',
      input    : {
        id   : textInput.id,
        type : textInput.template
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

    return  {
      nodes : [ textInputGroup, textInput ],
      edges : [
        {
          source  : textInputGroup.id,
          target  : textInput.id,
          payload : {}
        }
      ]
    }
  }
}

module.exports = TextInputGroupComposer
