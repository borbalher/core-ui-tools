const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer extends ComponentComposer
{
  validate(required, value, label)
  {
    if(required && !value)
      return `${label} is required`
  }

  compose({
    bindings  = [],
    listeners = [],
    renderonchange,
    attribute,
    disabled,
    optional,
    parentId,
    readonly,
    required,
    classes,
    options,
    label,
    title,
    value,
    name,
    big,
    id
  })
  {
    const
    checkboxInputGroup = super.compose({
      schema    : 'entity/checkbox-input-group',
      template  : 'checkbox-input-group',
      bindings  : [ ...this.bindings, ...bindings ],
      listeners : [ ...this.listeners, ...listeners ],
      error     : process.env.platform === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      attribute,
      disabled,
      optional,
      parentId,
      readonly,
      required,
      classes,
      options,
      label,
      title,
      value,
      name,
      big,
      id
    })

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
