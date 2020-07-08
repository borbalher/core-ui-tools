const ComponentComposer = require('common/ui/composer/component')
/**
 * TextInputGroup composer
 * @class
 */
class TextInputGroupComposer extends ComponentComposer
{
  validate(required, value, pattern, title, label)
  {
    if(required && (!value || value.trim() === ''))
      return `${label} is required`

    if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
        return title ? title : `Format invalid`
    }
  }

  compose({
    renderonchange,
    autocomplete,
    placeholder,
    datasets,
    attribute,
    maxLength,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    options,
    pattern,
    label,
    title,
    value,
    name,
    big,
    id
  })
  {
    const
    textInputGroup = super.compose({
      template : 'text-input-group',
      schema   : 'entity/text-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, pattern, title, label) : undefined,
      renderonchange,
      autocomplete,
      placeholder,
      datasets,
      attribute,
      maxLength,
      disabled,
      parentId,
      readonly,
      required,
      classes,
      options,
      pattern,
      label,
      title,
      value,
      name,
      big,
      id
    })

    return textInputGroup
  }
}

module.exports = TextInputGroupComposer
