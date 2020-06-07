const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * ToggeableFieldset composer
 * @class
 */
class ToggeableFieldsetComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.checkboxInputGroupComposer = this.locator.locate('ui/checkbox-input-group/composer')
  }

  isVisible(isToggled, showWhenToggled)
  {
    return (!isToggled && !showWhenToggled) || (isToggled && showWhenToggled)
  }

  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    label,
    showWhenToggled,
    isToggled,
    parentId,
    template,
    classes,
    formId,
    schema,
    name,
    id,
    ...args
  })
  {
    const
    toggeableFieldset = super.compose({
      ...args,
      isVisible : this.isVisible(isToggled, showWhenToggled),
      bindings  : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      toggle : this.checkboxInputGroupComposer.compose({
        id       : `${id}-checkbox-input-group`,
        value    : isToggled,
        name     : 'toggle',
        required : false,
        parentId : this.isVisible(isToggled, showWhenToggled),
        label
      }),
      showWhenToggled,
      renderonchange,
      template,
      parentId,
      classes,
      formId,
      schema,
      label,
      name,
      id
    })

    return toggeableFieldset
  }
}

module.exports = ToggeableFieldsetComposer
