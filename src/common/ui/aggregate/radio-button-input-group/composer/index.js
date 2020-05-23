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
    this.errorComposer            = this.locator.locate('ui/error/composer')
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
    listeners = [],
    bindings  = [],
    buttons   = [],
    renderonchange,
    errorMessage,
    attribute,
    errorCode,
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
    const
    error = this.errorComposer.compose({
      id       : `${id}-error`,
      name     : 'error',
      classes  : 'input-group__error',
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    radioButtonInputGroup = super.compose({
      buttons  : this.composeRadioButtons(buttons, id, value, attribute, disabled, readonly, required),
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
      renderonchange,
      parentId,
      classes,
      error,
      name,
      id
    })

    return radioButtonInputGroup
  }
}

module.exports = RadioButtonInputGroupComposer
