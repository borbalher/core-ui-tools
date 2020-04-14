class AssociativeArray
{
  constructor()
  {
    this.items  = new Map()
  }

  getItem(key)
  {
    return this.items.get(key)
  }

  setItem(key, value)
  {
    this.items.set(key, value)
  }

  removeItem(key)
  {
    this.items.delete(key)
  }

  clear()
  {
    this.items.clear()
  }

  toJSON()
  {
    const json = {}

    for(const [key, value] of this.items)
      json[key] = value

    return json
  }

  toArray()
  {
    return {
      keys   : [ ...this.items.keys() ],
      values : [ ...this.items.values() ]
    }
  }

  toLinearArray()
  {
    let array = []
    for(const [key, value] of this.items)
      array = [...array, [key, value]]

    return array
  }

  setFromJSON(json)
  {
    this.items = new Map()

    for(const key of Object.keys(json))
      this.set(key, json[key])
  }

  setFromKeyValuedArray(kvArray)
  {
    this.items = new Map(kvArray)
  }

  length()
  {
    return this.items.size
  }

  [Symbol.iterator]()
  {
    const values = [ ...this.items.values() ]

    let  index = 0
    return {
      next : () =>
      {
        if(index < values.length)
        {
          return {
            value : values[index++],
            done  : false
          }
        }
        else
        {
          return { done: true }
        }
      }
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'AssociativeArray'
  }
}

module.exports = AssociativeArray
