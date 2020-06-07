const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextareaInputGroupGroup composer
 * @class
 */
class TextareaInputGroupGroupComposer extends ComponentComposer
{
  compose({
    bindings  = [],
    listeners = [],
    id,
    name,
    parentId,
    renderonchange,
    classes,
    options,
    attribute,
    title,
    value,
    required,
    disabled,
    readonly,
    label,
    error,
    big,
    optional,
    maxLength,
    placeholder,
    rows,
    columns
  })
  {
    const
    textareaInputGroup = super.compose({
      template : 'textarea-input-group',
      schema   : 'entity/textarea-input-group',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      id,
      name,
      parentId,
      renderonchange,
      classes,
      options,
      attribute,
      title,
      value,
      required,
      disabled,
      readonly,
      label,
      error,
      big,
      optional,
      maxLength,
      placeholder,
      rows,
      columns
    })

    return textareaInputGroup
  }
}

module.exports = TextareaInputGroupGroupComposer
