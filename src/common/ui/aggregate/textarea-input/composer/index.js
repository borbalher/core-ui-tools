const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextareaInput composer
 * @class
 */
class TextareaInputComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
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
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
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
