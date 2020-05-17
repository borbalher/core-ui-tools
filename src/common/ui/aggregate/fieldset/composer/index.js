const ComponentComposer = require('../component')

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
    legend,
    name,
    id,
    ...args
  })
  {
    const fieldset = super.compose({
      schema   : 'entity/fieldset',
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
