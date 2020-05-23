const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * TextInputGroup composer
 * @class
 */
class TextInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.textInputComposer = this.locator.locate('ui/text-input/composer')
    this.errorComposer     = this.locator.locate('ui/error/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    autocomplete,
    placeholder,
    maxLength,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    pattern,
    title,
    label,
    value,
    name,
    big,
    id
  })
  {
    const
    error = this.errorComposer.compose({
      id       : `${id}-error`,
      name     : 'error',
      classes  : 'input-group__error',
      parentId : id
    }),
    textInput  = this.textInputComposer.compose({
      id       : `${id}-text-input`,
      name     : 'input',
      parentId : id,
      autocomplete,
      placeholder,
      maxLength,
      attribute,
      disabled,
      readonly,
      required,
      pattern,
      title,
      value
    }),
    textInputGroup = super.compose({
      template : 'text-input-group',
      schema   : 'entity/text-input-group',
      input    : textInput,
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
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

    return textInputGroup
  }
}

module.exports = TextInputGroupComposer
