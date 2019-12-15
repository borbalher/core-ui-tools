const IndexedDBFactory = require('.')

class IndexedDBFactoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  /**
   * @returns {IndexedDBFactory}
   */
  locate()
  {
    const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB

    return new IndexedDBFactory(indexedDB)
  }
}

module.exports = IndexedDBFactoryLocator
