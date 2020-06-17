const ComponentComposer = require('common/ui/composer/component')
/**
 * RadioButtonInput composer
 * @class
 */
class RadioButtonInputComposer extends ComponentComposer
{
  compose({
    renderonchange,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    value,
    label,
    name,
    id
  })
  {
    const radioButtonInput = super.compose({
      schema   : 'entity/radio-button-input',
      template : 'radio-button-input',
      renderonchange,
      attribute,
      disabled,
      parentId,
      readonly,
      required,
      classes,
      value,
      label,
      name,
      id
    })

    return radioButtonInput
  }
}

module.exports = RadioButtonInputComposer
