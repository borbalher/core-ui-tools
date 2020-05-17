const ComponentComposer = require('common/ui/component/composer')
/**
 * FormInput composer
 * @class
 */
class FormInputComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    parentId,
    template,
    isValid,
    classes,
    disabled,
    schema,
    title,
    data,
    name,
    id,
    ...args
  })
  {
    const form = super.compose({
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
      isValid,
      classes,
      schema,
      title,
      data,
      name,
      id,
      ...args
    })

    return form
  }
}

module.exports = FormInputComposer
