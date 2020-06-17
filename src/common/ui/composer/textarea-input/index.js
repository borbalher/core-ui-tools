const ComponentComposer = require('common/ui/composer/component')
/**
 * TextareaInput composer
 * @class
 */
class TextareaInputComposer extends ComponentComposer
{
  compose({
    renderonchange,
    placeholder,
    maxLength,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    columns,
    title,
    value,
    name,
    rows,
    id
  })
  {
    const textareaInput = super.compose({
      template : 'textarea-input',
      schema   : 'entity/textarea-input',
      renderonchange,
      placeholder,
      maxLength,
      attribute,
      disabled,
      parentId,
      readonly,
      required,
      classes,
      columns,
      title,
      value,
      name,
      rows,
      id
    })

    return textareaInput
  }
}

module.exports = TextareaInputComposer
