class HandlebarsBootstrap
{
  constructor(locator)
  {
    this.locator = locator
  }

  bootstrap()
  {
    const
    coreHbs    = this.locator.locate('core/handlebars'),
    handlebars = coreHbs.handlebars

    window.Handlebars =
    {
      template  : handlebars.template,
      templates : {},
      partials  : {}
    }

    require('../../../../../../src/api/www/assets/handlebars/partials')
    require('../../../../../../src/api/www/assets/handlebars/templates')

    coreHbs.addTemplates(window.Handlebars.templates)
    coreHbs.addPartials(window.Handlebars.partials)

    window.Handlebars = undefined
  }
}

module.exports = HandlebarsBootstrap
