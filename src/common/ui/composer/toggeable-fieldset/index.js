const ComponentComposer = require('common/ui/composer/component')
/**
 * ToggeableFieldset composer
 * @class
 */
class ToggeableFieldsetComposer extends ComponentComposer
{
  constructor(configuration, checkboxInputGroupComposer)
  {
    super(configuration)
    this.checkboxInputGroupComposer = checkboxInputGroupComposer
  }

  isVisible(isToggled, showWhenToggled)
  {
    return (!isToggled && !showWhenToggled) || (isToggled && showWhenToggled)
  }

  compose({
    showWhenToggled,
    renderonchange,
    isToggled,
    parentId,
    template,
    classes,
    formId,
    schema,
    label,
    name,
    id,
    ...args
  })
  {
    const
    toggeableFieldset = super.compose({
      ...args,
      isVisible : this.isVisible(isToggled, showWhenToggled),
      toggle    : this.checkboxInputGroupComposer.compose({
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
