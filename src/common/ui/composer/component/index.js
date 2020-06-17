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

  compose({
    renderonchange,
    parentId,
    template,
    classes,
    schema,
    name,
    id,
    ...args
  })
  {
    const
    options                           = this.configuration.find(`ui.component.${template}`) || {},
    { bindings = [], listeners = [] } = options,
    component                         = {
      ...args,
      renderonchange,
      listeners,
      bindings,
      parentId,
      template,
      options,
      classes,
      schema,
      name,
      id
    }

    return component
  }
}

module.exports = ComponentComposer
