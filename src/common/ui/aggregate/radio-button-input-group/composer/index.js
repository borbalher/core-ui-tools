const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * RadioButtonInputGroup composer
 * @class
 */
class RadioButtonInputGroupComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    id,
    name,
    parentId,
    renderonchange,
    classes,
    options,
    attribute,
    title,
    value,
    required,
    disabled,
    readonly,
    label,
    error,
    big,
    optional,
    buttons
  })
  {
    const
    radioButtonInputGroup = super.compose({
      schema   : 'entity/radio-button-input-group',
      template : 'radio-button-input-group',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      id,
      name,
      parentId,
      renderonchange,
      classes,
      options,
      attribute,
      title,
      value,
      required,
      disabled,
      readonly,
      label,
      error,
      big,
      optional,
      buttons
    })

    return radioButtonInputGroup
  }
}

module.exports = RadioButtonInputGroupComposer
