class SessionStorage
{
  constructor(sessionStorage)
  {
    this.sessionStorage = sessionStorage
    this.length       = sessionStorage.length
  }

  clear()
  {
    this.sessionStorage.clear()
    this.length = sessionStorage.length
  }

  getItem(key)
  {
    this.sessionStorage.getItem(key)
  }

  removeItem(key)
  {
    this.sessionStorage.removeItem(key)
    this.length = sessionStorage.length
  }

  setItem(key, value)
  {
    this.sessionStorage.setItem(key, value)
    this.length = sessionStorage.length
  }

  key(n)
  {
    return this.sessionStorage.key(n)
  }
}

module.exports = SessionStorage
