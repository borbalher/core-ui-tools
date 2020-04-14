const IndexedDB = require('..')

class IndexedDBFactory
{
  constructor(indexedDB)
  {
    this.indexedDB = indexedDB
  }

  create(dbName, dbVersion)
  {
    return new IndexedDB(this.indexedDB, dbName, dbVersion)
  }
}

module.exports = IndexedDBFactory
