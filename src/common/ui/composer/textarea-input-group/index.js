const ComponentComposer = require('common/ui/composer/component')
/**
 * TextareaInputGroupGroup composer
 * @class
 */
class TextareaInputGroupGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

  validate(required, value, label)
  {
    if(required && (!value || value.trim() === ''))
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)
  }

  compose({
    renderonchange,
    placeholder,
    attribute,
    maxLength,
    disabled,
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
      template : 'textarea-input-group',
      schema   : 'entity/textarea-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      placeholder,
      attribute,
      maxLength,
      disabled,
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
