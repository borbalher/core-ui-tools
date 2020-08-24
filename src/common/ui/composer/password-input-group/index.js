const ComponentComposer = require('common/ui/composer/component')
/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

  validate(required, value, pattern, title, label)
  {
    if(required && (!value || value.trim() === ''))
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)

    if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
        return title ? title : this.dictionary.translate('INVALID_FORMAT')
    }
  }

  compose({
    renderonchange,
    autocomplete,
    placeholder,
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
    passwordInputGroup = super.compose({
      schema   : 'entity/password-input-group',
      template : 'password-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, pattern, title, label) : undefined,
      renderonchange,
      autocomplete,
      placeholder,
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

    return passwordInputGroup
  }
}

module.exports = PasswordInputGroupComposer
