/**
 * Page composer
 * @class
 */
class PageComposer
{
  constructor(locator, configuration)
  {
    this.locator       = locator
    this.configuration = configuration
  }

  getPageOptions(id)
  {
    const options = this.configuration.find(`ui.component.${id}`)

    return {
      css       : options && options.css       ? options.css : [],
      scripts   : options && options.scripts   ? options.scripts : [],
      bindings  : options && options.bindings  ? options.bindings : [],
      listeners : options && options.listeners ? options.listeners : []
    }
  }

  compose({
    listeners = [],
    bindings  = [],
    css       = [],
    scripts   = [],
    renderonchange,
    template,
    classes,
    schema,
    name,
    id,
    ...args
  })
  {
    const
    options = this.getPageOptions(id),
    page    = {
      scripts : [
        ...options.scripts,
        ...scripts
      ],
      css : [
        ...options.css,
        ...css
      ],
      bindings : [
        ...options.bindings,
        ...bindings
      ],
      listeners : [
        ...options.listeners,
        ...listeners
      ],
      parentId : null,
      renderonchange,
      template,
      classes,
      schema,
      name,
      id,
      ...args
    }

    return page
  }
}

module.exports = PageComposer
