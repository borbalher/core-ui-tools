/**
 * Page composer
 * @class
 */
class PageComposer
{
  constructor(locator, options)
  {
    this.locator  = locator
    this.scripts  = options && options.scripts  ? options.scripts : []
    this.css      = options && options.css      ? options.css : []
  }

  compose({
    css     = [],
    scripts = [],
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
