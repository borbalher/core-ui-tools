class CoreHandlebars
{
  constructor(handlebars)
  {
    this.handlebars = handlebars
  }

  addTemplates(templates)
  {
    this.handlebars.templates = templates
  }

  addPartials(partials)
  {
    this.handlebars.partials = partials
  }

  getSafeString(html)
  {
    return new this.handlebars.SafeString(html)
  }

  compileTemplate(template, props)
  {
    const
    html     = this.handlebars.templates[template](props),
    safeHtml = this.getSafeString(html)

    return safeHtml.string
  }

  compilePartial(partial, props)
  {
    const
    html     = this.handlebars.partials[partial](props),
    safeHtml = this.getSafeString(html)

    return safeHtml.string
  }

  write(output, viewModel, route)
  {
    const template = viewModel.template || route.template

    if(!template)
      throw new Error('view can not be rendered, no template defined')

    const body = this.compilePartial(template, viewModel.body)

    viewModel.headers['Content-Length'] = Buffer.byteLength(body)

    output.writeHead(viewModel.meta.status || 200, viewModel.headers)
    output.end(body)
  }
}

module.exports = CoreHandlebars
