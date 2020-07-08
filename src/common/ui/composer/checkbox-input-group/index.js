const ComponentComposer = require('common/ui/composer/component')

/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer extends ComponentComposer
{
  validate(required, value, label)
  {
    if(required && !value)
      return `${label} is required`
  }

  compose({
    renderonchange,
    datasets,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
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
    checkboxInputGroup = super.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      datasets,
      attribute,
      disabled,
      parentId,
      readonly,
      required,
      classes,
      options,
      label,
      title,
      value,
      name,
      big,
      id
    })

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
