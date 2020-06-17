/**
 * Component composer
 * @class
 */
class ComponentComposer
{
  constructor(locator)
  {
    this.locator = locator
  }

  getOptions(template)
  {
    this.options   = this.configuration.find(`ui.component.${template}`) || {}
    this.bindings  = this.options.bindings  ? this.options.bindings  : []
    this.listeners = this.options.listeners ? this.options.listeners : []
  }

  compose({
    renderonchange,
    listeners,
    parentId,
    template,
    bindings,
    classes,
    schema,
    name,
    id,
    ...args
  })
  {
    this.getOptions(template)

    const component = {
      ...args,
      options   : this.options,
      listeners : this.listeners,
      bindings  : this.bindings,
      renderonchange,
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
