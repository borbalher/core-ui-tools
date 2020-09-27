/**
 * @implements {superhero/core/locator/constituent}
 */
class TemplateLocatorLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TemplateLocator}
   */
  locate()
  {
    const
    handlebars      = this.locator.locate('view/handlebars'),
    Template        = require('.'),
    TemplateFactory = require('./factory')

    return new TemplateFactory({ handlebars, Template })
  }
}

module.exports = TemplateLocatorLocator
