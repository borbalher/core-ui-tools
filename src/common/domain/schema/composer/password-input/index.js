const ComponentComposer = require('../component')

/**
 * PasswordInput composer
 * @class
 */
class PasswordInputComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    title,
    value,
    name,
    id
  })
  {
    const passwordInput = super.compose({
      template : 'password-input',
      schema   : 'entity/password-input',
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
      disabled,
      parentId,
      required,
      readonly,
      classes,
      title,
      value,
      name,
      id
    })

    return passwordInput
  }
}

module.exports = PasswordInputComposer
