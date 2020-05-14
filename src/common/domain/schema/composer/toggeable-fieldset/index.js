/**
 * ToggeableFieldset composer
 * @class
 */
class ToggeableFieldsetComposer
{
  constructor(componentComposer, checkboxInputGroupComposer, options)
  {
    this.componentComposer          = componentComposer
    this.checkboxInputGroupComposer = checkboxInputGroupComposer
    this.bindings                   = options && options.bindings  ? options.bindings : []
    this.listeners                  = options && options.listeners ? options.listeners : []
  }

  getSubTree(toggeableFieldset, toggle, fieldset)
  {
    const nodes = [...toggle.nodes, ...fieldset.nodes]

    let edges = []
    for(const node of nodes)
    {
      input.parentId = toggeableFieldset.id

      if(toggeableFieldset.disabled)
        input.disabled = true

      edges = [...edges, { source: toggeableFieldset.id, target: input.id, payload: {} }]
    }

    return { nodes: [toggeableFieldset, ...nodes], edges: [...edges, ...toggle.edges, ...fieldset.edges] }
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
    template,
    parentId,
    fieldset,
    classes,
    formId,
    legend,
    toggle,
    name,
    id
  })
  {
    const
    { nodes: [fieldset] } = fieldsetTree,
    { nodes: [toggeableFieldset] } = this.componentComposer.compose({
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      isVisible : this.isVisible(isToggled, showWhenToggled),
      showWhenToggled,
      renderonchange,
      fieldset,
      parentId,
      template,
      classes,
      formId,
      toggle,
      legend,
      name,
      id
    })

    return this.getSubTree(toggeableFieldset, toggle, fieldset)
  }
}

module.exports = ToggeableFieldsetComposer
