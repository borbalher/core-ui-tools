const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.checkboxInputComposer = this.locator.locate('ui/checkbox-input/composer')
    this.errorComposer         = this.locator.locate('ui/error/composer')
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    errorMessage,
    attribute,
    errorCode,
    required,
    disabled,
    readonly,
    parentId,
    classes,
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
      parentId : id,
      message  : errorMessage,
      code     : errorCode
    }),
    checkboxInput = this.checkboxInputComposer.compose({
      id       : `${id}-checkbox-input`,
      name     : 'input',
      parentId : id,
      attribute,
      required,
      disabled,
      readonly,
      title,
      value
    }),
    checkboxInputGroup = super.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
      input    : checkboxInput,
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      parentId,
      classes,
      label,
      error,
      name,
      big,
      id
    })

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
