/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class TextEncoderLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TextEncoder}
   */
  locate()
  {
    const TextEncoder = require('text-encoder-lite').TextEncoderLite
    return new TextEncoder()
  }
}

module.exports = TextEncoderLocator
