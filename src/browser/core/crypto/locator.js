const Crypto = require('.')

class CryptoLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Crypto}
   */
  locate()
  {
    const crypto = window.crypto || window.msCrypto

    return new Crypto(crypto)
  }
}

module.exports = CryptoLocator
