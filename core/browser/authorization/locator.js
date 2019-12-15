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
    configuration     = this.locator.locate('core/configuration'),
    dbName            = configuration.find('core.authorization.dbName'),
    dbVersion         = configuration.find('core.authorization.dbVersion'),
    indexedDBFactory  = this.locator.locate('core/indexed-db/factory'),
    indexedDB         = indexedDBFactory.create(dbName, dbVersion),
    crypto            = this.locator.locate('core/crypto'),
    jwkToPEM          = require('jwk-to-pem'),
    sessionCreator    = this.locator.locate('infrastructure/ui/session/creator'),
    bus               = this.locator.locate('core/bus')

    return new Authorization(indexedDB, crypto, jwkToPEM, sessionCreator, bus)
  }
}

module.exports = AuthorizationLocator
