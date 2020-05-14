const ComponentComposer = require('../component')
/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.passwordInputComposer = this.locator.locate('core/password-input/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
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
  {
    const
    passwordInputGroup = super.compose({
      schema   : 'entity/password-input-group',
      template : 'input-group',
      input    : this.passwordInputComposer.compose({
        id       : `${id}-password-input`,
        name     : 'input',
        parentId : id,
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
