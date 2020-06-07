const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer extends ComponentComposer
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
    optional
  })
  {
    const
    checkboxInputGroup = super.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
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
      optional
    })

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
