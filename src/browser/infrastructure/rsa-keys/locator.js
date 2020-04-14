const RSAKeysRepository  = require('./repository')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class RSAKeysRepositoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {RSAKeysRepository}
   */
  locate()
  {
    const
    indexedDBFactory      = this.locator.locate('infrastructure/indexed-db/gateway/factory'),
    configuration         = this.locator.locate('core/configuration'),
    { dbName, dbVersion } = configuration.find('infrastructure.rsa-keys.gateway'),
    indexedDB             = indexedDBFactory.create(dbName, dbVersion),
    crypto                = this.locator.locate('core/crypto'),
    jwkToPEM              = require('jwk-to-pem')

    return new RSAKeysRepository(indexedDB, crypto, jwkToPEM)
  }
}

module.exports = RSAKeysRepositoryLocator
