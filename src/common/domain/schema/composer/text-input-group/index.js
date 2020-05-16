const ComponentComposer = require('../component')
/**
 * TextInputGroup composer
 * @class
 */
class TextInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.textInputComposer = this.locator.locate('core/text-input/composer')
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
    error,
    name,
    big,
    id
  })
  {
    const textInputGroup = super.compose({
      template : 'text-input-group',
      schema   : 'entity/text-input-group',
      input    : this.textInputComposer.compose({
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
        classes,
        pattern,
        title,
        value
      }),
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
