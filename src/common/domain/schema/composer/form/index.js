/**
 * FormInput composer
 * @class
 */
class FormInputComposer
{
  constructor(componentComposer, options)
  {
    this.componentComposer = componentComposer
    this.bindings          = options && options.bindings  ? options.bindings : []
    this.listeners         = options && options.listeners ? options.listeners : []
  }

  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    parentId,
    template,
    isValid,
    classes,
    title,
    data,
    name,
    id
  })
  {
    const form = this.componentComposer.compose({
      schema   : 'entity/form',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      parentId,
      template,
      isValid,
      classes,
      title,
      data,
      name,
      id
    })


    return form
  }
}

module.exports = FormInputComposer
