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

  getSubTree(form, inputs, fieldsets)
  {
    const nodes = [...inputs, ...fieldsets]

    let edges = []
    for(const node of nodes)
    {
      node.parentId = form.id

      if(form.disabled)
        node.disabled = true

      edges = [...edges, { source: form.id, target: node.id }]
    }

    return { nodes: [form, ...nodes], edges }
  }

  compose({
    listeners = [],
    bindings  = [],
    inputs    = [],
    fieldsets = [],
    renderonchange,
    parentId,
    template,
    isValid,
    classes,
    disabled,
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
      disabled,
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
