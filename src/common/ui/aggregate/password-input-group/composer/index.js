const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)

    this.errorComposer         = this.locator.locate('ui/error/composer')
    this.passwordInputComposer = this.locator.locate('ui/password-input/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    errorMessage,
    errorCode,
    renderonchange,
    placeholder,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    title,
    label,
    value,
    name,
    big,
    id
  })
  {
    const
    error     = this.errorComposer.compose({
      id       : `${id}-error`,
      name     : 'error',
      classes  : 'input-group__error',
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    passwordInput = this.passwordInputComposer.compose({
      id       : `${id}-password-input`,
      name     : 'input',
      parentId : id,
      placeholder,
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    passwordInputGroup = super.compose({
      schema   : 'entity/password-input-group',
      template : 'password-input-group',
      input    : passwordInput,
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
      label,
      name,
      big,
      id
    })

    return passwordInputGroup
  }
}

module.exports = PasswordInputGroupComposer
