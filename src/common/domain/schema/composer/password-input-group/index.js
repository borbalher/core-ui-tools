/**
 * PasswordInputGroup composer
 * @class
 */
class PasswordInputGroupComposer
{
  constructor(componentComposer, passwordInputComposer, options)
  {
    this.componentComposer     = componentComposer
    this.passwordInputComposer = passwordInputComposer
    this.bindings              = options && options.bindings  ? options.bindings : []
    this.listeners             = options && options.listeners ? options.listeners : []
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
    value,
    name,
    id
  })
  {
    const
    { nodes: [passwordInput] } = this.passwordInputComposer.compose({
      id             : `${id}-password-input`,
      renderonchange : false,
      name           : 'input',
      parentId       : id,
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    { nodes: [passwordInputGroup] } = this.componentComposer.compose({
      schema   : 'entity/password-input-group',
      template : 'input-group',
      input    : {
        id   : passwordInput.id,
        type : passwordInput.template
      },
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
      value,
      name,
      id
    })

    return  {
      nodes : [ passwordInputGroup, passwordInput ],
      edges : [
        {
          source : passwordInputGroup.id,
          target : passwordInput.id
        }
      ]
    }
  }
}

module.exports = PasswordInputGroupComposer
