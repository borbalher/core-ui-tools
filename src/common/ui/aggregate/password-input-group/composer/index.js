const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer extends ComponentComposer
{
  compose({
    bindings  = [],
    listeners = [],
    id,
    name,
    parentId,
    renderonchange,
    classes,
    options,
    attribute,
    title,
    value,
    required,
    disabled,
    readonly,
    label,
    error,
    big,
    optional,
    autocomplete,
    maxLength,
    placeholder,
    pattern
  })
  {
    const
    passwordInputGroup = super.compose({
      schema   : 'entity/password-input-group',
      template : 'password-input-group',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      id,
      name,
      parentId,
      renderonchange,
      classes,
      options,
      attribute,
      title,
      value,
      required,
      disabled,
      readonly,
      label,
      error,
      big,
      optional,
      autocomplete,
      maxLength,
      placeholder,
      pattern
    })

    return passwordInputGroup
  }
}

module.exports = PasswordInputGroupComposer
