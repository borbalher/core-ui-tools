/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer
{
  constructor(componentComposer, checkboxInputComposer, options)
  {
    this.componentComposer     = componentComposer
    this.checkboxInputComposer = checkboxInputComposer
    this.bindings              = options && options.bindings  ? options.bindings : []
    this.listeners             = options && options.listeners ? options.listeners : []
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
    checkboxInput = this.checkboxInputComposer.compose({
      id             : `${id}-checkbox-input`,
      name           : 'input',
      renderonchange : false,
      parentId       : id,
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    checkboxInputGroup = this.componentComposer.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
      input    : {
        id   : checkboxInput.id,
        type : checkboxInput.template
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
      nodes : [ checkboxInputGroup, checkboxInput ],
      edges : [
        {
          source  : checkboxInputGroup.id,
          target  : checkboxInput.id,
          payload : {}
        }
      ]
    }
  }
}

module.exports = CheckboxInputGroupComposer
