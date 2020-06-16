const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * RadioFieldset composer
 * @class
 */
class RadioFieldsetComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
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
      bindings  : [ ...this.bindings, ...bindings ],
      listeners : [ ...this.listeners, ...listeners ],
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
