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
  }

  compose({
    bindings  = [],
    listeners = [],
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
  {
    const
    checkboxInputGroup = super.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
      input    : this.checkboxInputComposer.compose({
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

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
