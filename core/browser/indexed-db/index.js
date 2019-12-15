class IndexedDB
{
  constructor(indexedDB, dbName, dbVersion)
  {
    this.indexedDB = indexedDB
    this.dbName    = dbName
    this.dbVersion = dbVersion

    this.wrapper = new Promise((resolve, reject) =>
    {
      const request = this.indexedDB.open(dbName, dbVersion)

      request.onupgradeneeded = (event) =>
      {
        this.db = event.target.result
        this.db.createObjectStore('store')
      }

      request.onsuccess = (event) =>
      {
        this.db = event.target.result
        resolve()
      }

      request.onerror = (event) =>
      {
        reject(event.target.errorCode)
      }
    })
  }

  getIndedexDB()
  {
    return this.wrapper
  }

  getStore()
  {
    return this.db.transaction(['store'], 'readwrite').objectStore('store')
  }

  clear()
  {
    this.indexedDB.deleteDatabase(this.dbName)
  }

  async getItem(key)
  {
    return this.wrapper
      .then(() =>
      {
        return new Promise((resolve, reject) =>
        {
          const request = this.getStore().get(key)

          request.onsuccess = (event) =>
          {
            resolve(event.target.result)
          }

          request.onerror = (event) =>
          {
            reject(event.target.errorCode)
          }
        })
      })
      .catch((error) =>
      {
        console.log(error)
      })
  }

  async removeItem(key)
  {
    return this.wrapper
      .then(() =>
      {
        return new Promise((resolve, reject) =>
        {
          const request = this.getStore().delete(key)

          request.onsuccess = (event) =>
          {
            resolve(event.target.result)
          }

          request.onerror = (event) =>
          {
            reject(event.target.errorCode)
          }
        })
      })
      .catch((error) =>
      {
        console.log(error)
      })
  }

  async setItem(key, value)
  {
    return this.wrapper
      .then(() =>
      {
        return new Promise((resolve, reject) =>
        {
          const request = this.getStore().put(value, key)

          request.onsuccess = resolve

          request.onerror = (event) =>
          {
            reject(event.targ.errorCode)
          }
        })
      })
      .catch((error) =>
      {
        console.log(error)
      })
  }

  key(n)
  {
    throw Error('not implemented yet')
  }
}

module.exports = IndexedDB
