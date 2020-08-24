const ComponentComposer = require('common/ui/composer/component')

/**
 * RadioButtonInputGroup composer
 * @class
 */
class RadioButtonInputGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

  validate(required, value, label)
  {
    if(required && !value)
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)
  }

  compose({
    renderonchange,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    buttons,
    classes,
    options,
    label,
    title,
    value,
    name,
    big,
    id
  })
  {
    const
    radioButtonInputGroup = super.compose({
      schema   : 'entity/radio-button-input-group',
      template : 'radio-button-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      attribute,
      disabled,
      parentId,
      readonly,
      required,
      buttons,
      classes,
      options,
      label,
      title,
      value,
      name,
      big,
      id
    })

    return radioButtonInputGroup
  }
}

module.exports = RadioButtonInputGroupComposer
