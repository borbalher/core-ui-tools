const ComponentComposer = require('common/ui/composer/component')

/**
 * PasswordInput composer
 * @class
 */
class PasswordInputComposer extends ComponentComposer
{
  compose({
    renderonchange,
    placeholder,
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
      renderonchange,
      placeholder,
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
