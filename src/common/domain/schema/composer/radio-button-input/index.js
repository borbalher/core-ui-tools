const ComponentComposer = require('../component')
/**
 * RadioButtonInput composer
 * @class
 */
class RadioButtonInputComposer extends ComponentComposer
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
    value,
    name,
    id
  })
  {
    const radioButtonInput = super.compose({
      schema   : 'entity/radio-button-input',
      template : 'radio-button-input',
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
      readonly,
      required,
      classes,
      value,
      name,
      id
    })

    return radioButtonInput
  }
}

module.exports = RadioButtonInputComposer