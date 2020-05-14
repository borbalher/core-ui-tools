/**
 * PasswordInput composer
 * @class
 */
class PasswordInputComposer
{
  constructor(componentComposer, options)
  {
    this.componentComposer = componentComposer
    this.bindings          = options && options.bindings  ? options.bindings : []
    this.listeners         = options && options.listeners ? options.listeners : []
  }

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
    const passwordInput = this.componentComposer.compose({
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
