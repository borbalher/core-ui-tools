const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * RadioButtonInputGroup composer
 * @class
 */
class RadioButtonInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.radioButtonInputComposer = this.locator.locate('ui/radio-button-input/composer')
  }

  composeRadioButtons(buttons, id, value, attribute, disabled, readonly, required)
  {
    return buttons.map((button) =>
    {
      return this.radioButtonInputComposer.compose({
        label    : button.label,
        id       : button.id,
        name     : 'input',
        parentId : id,
        attribute,
        disabled,
        readonly,
        required,
        value
      })
    })
  }

  compose({
    listeners = {},
    bindings  = {},
    buttons   = [],
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
    const radioButtonInputGroup = super.compose({
      buttons  : this.composeRadioButtons(buttons, id, value, attribute, disabled, readonly, required),
      schema   : 'entity/radio-button-input-group',
      template : 'radio-button-input-group',
      bindings : {
        ...this.bindings,
        ...bindings
      },
      listeners : {
        ...this.listeners,
        ...listeners
      },
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

    return radioButtonInputGroup
  }
}

module.exports = RadioButtonInputGroupComposer
