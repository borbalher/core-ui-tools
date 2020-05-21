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
    this.passwordInputComposer = this.locator.locate('ui/password-input/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
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
    error,
    name,
    big,
    id
  })
  {
    const
    passwordInputGroup = super.compose({
      schema   : 'entity/password-input-group',
      template : 'password-input-group',
      input    : this.passwordInputComposer.compose({
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
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      attribute,
      required,
      disabled,
      readonly,
      parentId,
      classes,
      title,
      label,
      value,
      error,
      name,
      big,
      id
    })

    return passwordInputGroup
  }
}

module.exports = PasswordInputGroupComposer
