const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * SelectInputGroup composer
 * @class
 */
class SelectInputGroupComposer extends ComponentComposer
{
  validate(required, value, label)
  {
    if(required && (!value || value.length === 0))
      return `${label} is required`
  }

  compose({
    renderonchange,
    autocomplete,
    placeholder,
    attribute,
    disabled,
    multiple,
    optional,
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
      attribute,
      disabled,
      multiple,
      optional,
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
