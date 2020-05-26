const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * Fieldset composer
 * @class
 */
class FieldsetComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    template,
    disabled,
    parentId,
    classes,
    formId,
    schema,
    legend,
    name,
    id,
    ...args
  })
  {
    const fieldset = super.compose({
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      disabled,
      parentId,
      template,
      classes,
      schema,
      formId,
      legend,
      name,
      id,
      ...args
    })

    return fieldset
  }
}

module.exports = FieldsetComposer
