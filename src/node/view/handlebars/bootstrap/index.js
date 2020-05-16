/* eslint-disable no-undef */
class HandlebarsBootstrap
{
  constructor(path, handlebars)
  {
    this.path       = path
    this.handlebars = handlebars
  }

  bootstrap()
  {
    const
    handlebars      = this.handlebars.handlebars,
    partials        = `${this.path.main.dirname}/node/api/www/assets/handlebars/partials`,
    templates       = `${this.path.main.dirname}/node/api/www/assets/handlebars/templates`

    global.Handlebars =
    {
      template  : handlebars.template,
      templates : {},
      partials  : {}
    }

    if(this.path.isResolvable(partials))
    {
      require(partials)
      delete require.cache[require.resolve(partials)]
    }

    if(this.path.isResolvable(templates))
    {
      require(templates)
      delete require.cache[require.resolve(templates)]
    }

    this.handlebars.addTemplates(Handlebars.templates)
    this.handlebars.addPartials(Handlebars.partials)

    Handlebars = undefined
  }
}

module.exports = HandlebarsBootstrap
