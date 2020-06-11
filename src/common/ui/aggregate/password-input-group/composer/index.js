const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer extends ComponentComposer
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
    bindings  = [],
    listeners = [],
    renderonchange,
    autocomplete,
    placeholder,
    attribute,
    maxLength,
    disabled,
    optional,
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
      schema    : 'entity/password-input-group',
      template  : 'password-input-group',
      bindings  : [ ...this.bindings, ...bindings ],
      listeners : [ ...this.listeners, ...listeners ],
      error     : process.env.PLATFORM === 'browser' ? this.validate(required, value, pattern, title, label) : undefined,
      renderonchange,
      autocomplete,
      placeholder,
      attribute,
      maxLength,
      disabled,
      optional,
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
