const CoreHandlebarsHelperUnless  = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperUnlessLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperUnless}
   */
  locate()
  {
    const
    helperIf   = this.locator.locate('view/handlebars/helper/if'),
    helperIfFn = helperIf.create()

    return new CoreHandlebarsHelperUnless(helperIfFn)
  }
}

module.exports = CoreHandlebarsHelperUnlessLocator
