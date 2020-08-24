const ComponentComposer = require('common/ui/composer/component')
/**
 * SelectInputGroup composer
 * @class
 */
class SelectInputGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

  validate(required, value, label)
  {
    if(required && (!value || value.length === 0))
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)
  }

  compose({
    renderonchange,
    autocomplete,
    placeholder,
    datasets,
    attribute,
    disabled,
    multiple,
    parentId,
    readonly,
    required,
    classes,
    options,
    items,
    label,
    title,
    value,
    name,
    size,
    big,
    id
  })
  {
    const
    selectInputGroup = super.compose({
      template : 'select-input-group',
      schema   : 'entity/select-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      autocomplete,
      placeholder,
      datasets,
      attribute,
      disabled,
      multiple,
      parentId,
      readonly,
      required,
      classes,
      options,
      items,
      label,
      title,
      value,
      name,
      size,
      big,
      id
    })

    return selectInputGroup
  }
}

module.exports = SelectInputGroupComposer
