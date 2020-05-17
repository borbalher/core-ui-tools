const ComponentComposer = require('common/ui/component/composer')
/**
 * TextInput composer
 * @class
 */
class TextInputComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    autocomplete,
    placeholder,
    maxLength,
    attribute,
    disabled,
    parentId,
    readonly,
    required,
    classes,
    pattern,
    title,
    value,
    name,
    id
  })
  {
    const textInput = super.compose({
      template : 'text-input',
      schema   : 'entity/text-input',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      autocomplete,
      placeholder,
      maxLength,
      attribute,
      disabled,
      parentId,
      required,
      readonly,
      classes,
      pattern,
      title,
      value,
      name,
      id
    })

    return textInput
  }
}

module.exports = TextInputComposer
