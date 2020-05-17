const ComponentComposer = require('common/ui/component/composer')
/**
 * ToggeablePanel composer
 * @class
 */
class ToggeablePanelComposer extends ComponentComposer
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
    classes,
    formId,
    legend,
    schema,
    panel,
    name,
    id
  })
  {
    const
    toggeablePanel = super.compose({
      template  : 'toggeable-panel',
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
      parentId,
      classes,
      formId,
      legend,
      schema,
      panel : super.compose({
        ...panel,
        name     : 'panel',
        parentId : id
      }),
      name,
      id
    })

    return toggeablePanel
  }
}

module.exports = ToggeablePanelComposer
