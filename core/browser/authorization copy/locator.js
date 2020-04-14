const Authorization  = require('core-ui-tools/core/browser/authorization')

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
    jwkToPEM               = require('./node_modules/core-ui-tools/core/browser/authorization/node_modules/core-ui-tools/core/browser/login/node_modules/jwk-to-pem'),
    indexedDBFactory       = this.locator.locate('core/indexed-db/factory'),
    configuration          = this.locator.locate('core/configuration'),
    jwe                    = this.locator.locate('core/jwe'),
    jwt                    = this.locator.locate('core/jwt'),
    crypto                 = this.locator.locate('core/crypto'),
    // bus                    = this.locator.locate('infrastructure/bus'),
    dbName                 = configuration.find('infrastructure.authorization.dbName'),
    dbVersion              = configuration.find('infrastructure.authorization.dbVersion'),
    indexedDB              = indexedDBFactory.create(dbName, dbVersion)
    // channel                = bus.createChannel('authorization')

    return new Authorization(indexedDB, crypto, jwkToPEM, jwe, jwt)
  }
}

module.exports = AuthorizationLocator
