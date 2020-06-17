const ComponentComposer = require('common/ui/composer/component')
/**
 * RadioFieldset composer
 * @class
 */
class RadioFieldsetComposer extends ComponentComposer
{
  compose({
    selectedFieldset,
    defaultFieldset,
    renderonchange,
    fieldsets,
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
    radioFieldset = super.compose({
      ...args,
      selectedFieldset,
      defaultFieldset,
      renderonchange,
      fieldsets,
      parentId,
      template,
      classes,
      formId,
      schema,
      label,
      name,
      id
    })

    return radioFieldset
  }
}

module.exports = RadioFieldsetComposer
