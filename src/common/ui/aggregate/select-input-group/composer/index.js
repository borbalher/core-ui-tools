const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * SelectInputGroup composer
 * @class
 */
class SelectInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.selectInputComposer = this.locator.locate('ui/select-input/composer')
    this.errorComposer       = this.locator.locate('ui/error/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    autocomplete,
    errorMessage,
    placeholder,
    attribute,
    multiple,
    errorCode,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    title,
    items,
    label,
    value,
    size,
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
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    selectInput = this.selectInputComposer.compose({
      id       : `${id}-select-input`,
      parentId : id,
      name     : 'input',
      autocomplete,
      placeholder,
      attribute,
      multiple,
      required,
      disabled,
      readonly,
      title,
      items,
      value,
      size
    }),
    selectInputGroup = super.compose({
      template : 'select-input-group',
      schema   : 'entity/select-input-group',
      input    : selectInput,
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
      parentId,
      classes,
      items,
      value,
      error,
      label,
      name,
      big,
      id
    })

    return selectInputGroup
  }
}

module.exports = SelectInputGroupComposer
