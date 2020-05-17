const ComponentComposer = require('../component')

/**
 * CheckboxInput composer
 * @class
 */
class CheckboxInputComposer extends ComponentComposer
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
    title,
    value,
    name,
    id
  })
  {
    const checkboxInput = super.compose({
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
