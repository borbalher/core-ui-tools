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
    this.errorComposer         = this.locator.locate('ui/error/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    errorMessage,
    placeholder,
    maxLength,
    attribute,
    errorCode,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    columns,
    title,
    label,
    value,
    name,
    rows,
    big,
    id
  })
  {
    const
    error = this.errorComposer.compose({
      id       : `${id}-error`,
      name     : 'error',
      classes  : 'input-group__error',
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    textareaInput = this.textareaInputComposer.compose({
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
    textareaInputGroup = super.compose({
      template : 'textarea-input-group',
      schema   : 'entity/textarea-input-group',
      input    : textareaInput,
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
      parentId,
      classes,
      columns,
      value,
      error,
      label,
      name,
      rows,
      big,
      id
    })

    return textareaInputGroup
  }
}

module.exports = TextareaInputGroupGroupComposer
