class HandlebarsBootstrap
{
  constructor(locator)
  {
    this.locator = locator
  }

  bootstrap()
  {
    const
    coreHbs    = this.locator.locate('view/handlebars'),
    handlebars = coreHbs.handlebars

    window.Handlebars =
    {
      template  : handlebars.template,
      templates : {},
      partials  : {}
    }

    require('www/assets/handlebars/partials')

    coreHbs.addTemplates(window.Handlebars.templates)
    coreHbs.addPartials(window.Handlebars.partials)

    window.Handlebars = undefined
  }
}

module.exports = HandlebarsBootstrap
