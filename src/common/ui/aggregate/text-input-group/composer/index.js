const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextInputGroup composer
 * @class
 */
class TextInputGroupComposer extends ComponentComposer
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
    autocomplete,
    maxLength,
    placeholder,
    pattern
  })
  {
    const
    textInputGroup = super.compose({
      template : 'text-input-group',
      schema   : 'entity/text-input-group',
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
      autocomplete,
      maxLength,
      placeholder,
      pattern
    })

    return textInputGroup
  }
}

module.exports = TextInputGroupComposer
