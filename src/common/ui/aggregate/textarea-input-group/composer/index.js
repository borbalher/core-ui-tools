const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextareaInputGroupGroup composer
 * @class
 */
class TextareaInputGroupGroupComposer extends ComponentComposer
{
  validate(required, value, label)
  {
    if(required && (!value || value.trim() === ''))
      return `${label} is required`
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    placeholder,
    attribute,
    maxLength,
    disabled,
    optional,
    parentId,
    readonly,
    required,
    classes,
    columns,
    options,
    label,
    title,
    value,
    name,
    rows,
    big,
    id
  })
  {
    const
    textareaInputGroup = super.compose({
      template  : 'textarea-input-group',
      schema    : 'entity/textarea-input-group',
      bindings  : [ ...this.bindings, ...bindings ],
      listeners : [ ...this.listeners, ...listeners ],
      error     : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      placeholder,
      attribute,
      maxLength,
      disabled,
      optional,
      parentId,
      readonly,
      required,
      classes,
      columns,
      options,
      label,
      title,
      value,
      name,
      rows,
      big,
      id
    })

    return textareaInputGroup
  }
}

module.exports = TextareaInputGroupGroupComposer
