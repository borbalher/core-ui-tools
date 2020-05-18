/**
 * Component composer
 * @class
 */
class ComponentComposer
{
  constructor(locator, options)
  {
    this.locator   = locator
    this.bindings  = options && options.bindings  ? options.bindings  : {}
    this.listeners = options && options.listeners ? options.listeners : {}
  }

  compose({
    renderonchange = true,
    bindings       = {},
    listeners      = {},
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
