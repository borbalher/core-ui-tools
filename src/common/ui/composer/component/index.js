/**
 * Component composer
 * @class
 */
class ComponentComposer
{
  constructor(configuration)
  {
    this.configuration = configuration
  }

  getComponentOptions(template)
  {
    this.options = this.configuration.find(`ui.component.${template}`) || {}
  }

  compose({
    renderonchange = true,
    parentId,
    template,
    classes,
    schema,
    name,
    id,
    ...args
  })
  {
    this.getComponentOptions(template)

    const
    {
      bindings  = [],
      listeners = []
    }         = this.options,
    component = {
      ...args,
      options : this.options,
      renderonchange,
      listeners,
      bindings,
      parentId,
      template,
      classes,
      schema,
      name,
      id
    }

    return component
  }
}

module.exports = ComponentComposer
