/**
 * SelectInputGroup composer
 * @class
 */
class SelectInputGroupComposer
{
  constructor(componentComposer, selectInputComposer, options)
  {
    this.componentComposer   = componentComposer
    this.selectInputComposer = selectInputComposer
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
    selectInput = this.selectInputComposer.compose({
      renderonchange : false,
      parentId       : id,
      id             : `${id}-select-input`,
      name           : 'input',
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    selectInputGroup = this.componentComposer.compose({
      template : 'input-group',
      schema   : 'entity/select-input-group',
      input    : {
        id   : selectInput.id,
        type : selectInput.template
      },
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners,
        {
          channel : selectInput.id,
          event   : 'input.changed',
          locator : 'select-input-group/listener/validate-input'
        }
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
      nodes : [ selectInputGroup, selectInput ],
      edges : [
        {
          source  : selectInputGroup.id,
          target  : selectInput.id,
          payload : {}
        }
      ]
    }
  }
}

module.exports = SelectInputGroupComposer
