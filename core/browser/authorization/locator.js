const Authorization  = require('.')

/**
 * @imeplements {@superhero/core/locator/constituent}
 */
class AuthorizationLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {Authorization}
   */
  locate()
  {
    const
    configuration          = this.locator.locate('core/configuration'),
    dbName                 = configuration.find('core.authorization.dbName'),
    dbVersion              = configuration.find('core.authorization.dbVersion'),
    indexedDBFactory       = this.locator.locate('core/indexed-db/factory'),
    indexedDB              = indexedDBFactory.create(dbName, dbVersion),
    crypto                 = this.locator.locate('core/crypto'),
    jwkToPEM               = require('jwk-to-pem'),
    repository             = this.locator.locate('infrastructure/ui/repository'),
    bus                    = this.locator.locate('core/bus'),
    keyGenerationAlgorithm = configuration.find('core.authorization.keyGenerationAlgorithm'),
    keyWrappingAlgorithm   = configuration.find('core.authorization.keyWrappingAlgorithm')

    return new Authorization(indexedDB, crypto, jwkToPEM, repository, bus, keyGenerationAlgorithm, keyWrappingAlgorithm)
  }
}

module.exports = AuthorizationLocator
