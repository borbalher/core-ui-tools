const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextareaInputGroupGroup composer
 * @class
 */
class TextareaInputGroupGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.textareaInputComposer = this.locator.locate('ui/textarea-input/composer')
  }

  compose({
    bindings  = {},
    listeners = {},
    renderonchange,
    placeholder,
    maxLength,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    columns,
    title,
    label,
    value,
    error,
    name,
    rows,
    big,
    id
  })
  {
    const
    textareaInputGroup = super.compose({
      template : 'textarea-input-group',
      schema   : 'entity/textarea-input-group',
      input    : this.textareaInputComposer.compose({
        id       : `${id}-textarea-input`,
        name     : 'input',
        parentId : id,
        placeholder,
        maxLength,
        attribute,
        disabled,
        readonly,
        required,
        classes,
        columns,
        title,
        value,
        rows
      }),
      bindings : {
        ...this.bindings,
        ...bindings
      },
      listeners : {
        ...this.listeners,
        ...listeners
      },
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

    return textareaInputGroup
  }
}

module.exports = TextareaInputGroupGroupComposer
