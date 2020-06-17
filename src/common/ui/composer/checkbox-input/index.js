const ComponentComposer = require('common/ui/composer/component')

/**
 * CheckboxInput composer
 * @class
 */
class CheckboxInputComposer extends ComponentComposer
{
  compose({
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
    const
    checkboxInput = super.compose({
      template : 'checkbox-input',
      schema   : 'entity/checkbox-input',
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

    return checkboxInput
  }
}

module.exports = CheckboxInputComposer
