/**
 * Component composer
 * @class
 */
class ComponentComposer
{
  constructor(locator, options = {})
  {
    this.locator   = locator
    this.options   = options
    this.bindings  = options.bindings  ? options.bindings  : {}
    this.listeners = options.listeners ? options.listeners : {}
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
