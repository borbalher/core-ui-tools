const ComponentComposer = require('../component')
/**
 * SelectInput composer
 * @class
 */
class SelectInputComposer extends ComponentComposer
{
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
    const selectInput = super.compose({
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
