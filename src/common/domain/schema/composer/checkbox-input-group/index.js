const ComponentComposer = require('../component')

/**
 * CheckboxInputGroup composer
 * @class
 */
class CheckboxInputGroupComposer extends ComponentComposer
{
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
    value,
    name,
    id
  })
  {
    const
    checkboxInputGroup = super.compose({
      schema   : 'entity/checkbox-input-group',
      template : 'checkbox-input-group',
      input    : {
        id       : `${id}-checkbox-input`,
        name     : 'input',
        parentId : id,
        attribute,
        required,
        disabled,
        readonly,
        title,
        value
      },
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
      value,
      name,
      id
    })

    return  checkboxInputGroup
  }
}

module.exports = CheckboxInputGroupComposer
