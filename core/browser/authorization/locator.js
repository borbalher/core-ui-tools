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
    jwkToPEM               = require('jwk-to-pem'),
    configuration          = this.locator.locate('core/configuration'),
    crypto                 = this.locator.locate('core/crypto'),
    indexedDBFactory       = this.locator.locate('core/indexed-db/factory'),
    bus                    = this.locator.locate('core/bus'),
    dbName                 = configuration.find('infrastructure.authorization.dbName'),
    dbVersion              = configuration.find('infrastructure.authorization.dbVersion'),
    indexedDB              = indexedDBFactory.create(dbName, dbVersion),
    channel                = bus.createChannel('authorization')

    return new Authorization(indexedDB, crypto, jwkToPEM, channel)
  }
}

module.exports = AuthorizationLocator
