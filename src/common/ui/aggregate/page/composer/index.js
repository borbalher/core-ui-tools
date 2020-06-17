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
      css       : options && options.css       ? options.css       : [],
      scripts   : options && options.scripts   ? options.scripts   : [],
      bindings  : options && options.bindings  ? options.bindings  : [],
      listeners : options && options.listeners ? options.listeners : []
    }
  }

  compose({
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
      scripts   : options.scripts,
      css       : options.css,
      bindings  : options.bindings,
      listeners : options.listeners,
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
