const CoreHandlebarsHelperStripTags = require('.')

/**
 * @implements {superhero/core/locator/constituent}
 */
class CoreHandlebarsHelperStripTagsLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {CoreHandlebarsHelperStripTags}
   */
  locate()
  {
    return new CoreHandlebarsHelperStripTags()
  }
}

module.exports = CoreHandlebarsHelperStripTagsLocator
