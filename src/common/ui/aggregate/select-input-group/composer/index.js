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
  }

  compose({
    bindings  = {},
    listeners = {},
    renderonchange,
    attribute,
    required,
    disabled,
    readonly,
    parentId,
    classes,
    title,
    items,
    label,
    value,
    error,
    name,
    big,
    id
  })
  {
    const
    selectInputGroup = super.compose({
      template : 'select-input-group',
      schema   : 'entity/select-input-group',
      input    : this.selectInputComposer.compose({
        id       : `${id}-select-input`,
        parentId : id,
        name     : 'input',
        attribute,
        required,
        disabled,
        readonly,
        title,
        items,
        value
      }),
      bindings : {
        ...this.bindings,
        ...bindings
      },
      listeners : {
        ...this.listeners,
        ...listeners
      },
      renderonchange,
      attribute,
      required,
      disabled,
      readonly,
      parentId,
      classes,
      title,
      label,
      error,
      name,
      big,
      id
    })

    return selectInputGroup
  }
}

module.exports = SelectInputGroupComposer
