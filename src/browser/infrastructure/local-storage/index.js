class LocalStorage
{
  constructor(localStorage)
  {
    this.localStorage = localStorage
    this.length       = localStorage.length
  }

  clear()
  {
    this.localStorage.clear()
    this.length = localStorage.length
  }

  getItem(key)
  {
    return this.localStorage.getItem(key)
  }

  removeItem(key)
  {
    this.localStorage.removeItem(key)
    this.length = localStorage.length
  }

  setItem(key, value)
  {
    this.localStorage.setItem(key, value)
    this.length = localStorage.length
  }

  key(n)
  {
    return this.localStorage.key(n)
  }
}

module.exports = LocalStorage
