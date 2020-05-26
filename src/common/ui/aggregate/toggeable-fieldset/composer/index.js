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
    showWhenToggled,
    isToggled,
    parentId,
    template,
    classes,
    formId,
    schema,
    name,
    id
  })
  {
    const
    toggeableFieldset = super.compose({
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
        parentId : id
      }),
      showWhenToggled,
      renderonchange,
      template,
      parentId,
      classes,
      formId,
      schema,
      name,
      id
    })

    return toggeableFieldset
  }
}

module.exports = ToggeableFieldsetComposer
