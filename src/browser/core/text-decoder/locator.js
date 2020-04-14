/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class TextDecoderLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {TextDecoder}
   */
  locate()
  {
    const TextDecoder = require('text-encoder-lite').TextDecoderLite
    return new TextDecoder()
  }
}

module.exports = TextDecoderLocator
