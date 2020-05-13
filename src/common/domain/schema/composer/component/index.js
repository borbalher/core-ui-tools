/**
 * Component composer
 * @class
 */
class ComponentComposer
{
  compose({
    renderonchange = true,
    bindings       = [],
    listeners      = [],
    parentId       = null,
    template,
    classes,
    schema,
    name,
    id,
    ...args
  })
  {
    const component = {
      ...args,
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
