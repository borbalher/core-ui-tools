/**
 * Page composer
 * @class
 */
class PageComposer
{
  constructor(locator, options)
  {
    this.locator   = locator
    this.css       = options && options.css      ? options.css : []
    this.scripts   = options && options.scripts  ? options.scripts : []
    this.bindings  = options && options.bindings  ? options.bindings : []
    this.listeners = options && options.listeners ? options.listeners : []
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
    const page = {
      scripts : [
        ...this.scripts,
        ...scripts
      ],
      css : [
        ...this.css,
        ...css
      ],
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        listeners
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
