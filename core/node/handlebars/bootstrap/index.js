/* eslint-disable no-undef */
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

    global.Handlebars =
    {
      template  : handlebars.template,
      templates : {},
      partials  : {}
    }

    require('../../../../../../src/api/www/assets/handlebars/partials')
    require('../../../../../../src/api/www/assets/handlebars/templates')

    delete require.cache[require.resolve('../../../../../../src/api/www/assets/handlebars/partials')]
    delete require.cache[require.resolve('../../../../../../src/api/www/assets/handlebars/templates')]

    coreHbs.addTemplates(Handlebars.templates)
    coreHbs.addPartials(Handlebars.partials)

    Handlebars = undefined
  }
}

module.exports = HandlebarsBootstrap
