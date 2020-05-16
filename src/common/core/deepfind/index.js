class DeepFind
{
  constructor()
  {
    this.arrayPropertyRegexp  = /(\w+)\[([0-9]+)\]/i
  }

  getPath(keys, index)
  {
    let path = ''

    for(let i = 0; i < index; i++)
      path += `${keys[i]}.`

    return `${path}${keys[index]}`
  }

  isObject(obj)
  {
    return obj && typeof obj === 'object'
  }

  isArrayProperty(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)
    return !!match
  }

  getArrayPropertyIndex(key)
  {
    const match = this.arrayPropertyRegexp.exec(key)

    return {
      name     : match[1],
      position : Number(match[2])
    }
  }

  isLastKey(keys, index)
  {
    return index === keys.length - 1
  }

  objectProperty(obj, key, index, keys)
  {
    if(!this.isObject(obj[key]) && !this.isLastKey(keys, index))
      return undefined
    else
      return obj[key]
  }

  arrayProperty(obj, key, index, keys)
  {
    const { name, position } = this.getArrayPropertyIndex(key)

    if(!this.isObject(obj[name][position]) && !this.isLastKey(keys, index))
      return undefined
    else
      return obj[name][position]
  }

  findPath(obj, keys)
  {
    let pointer = obj

    for(const [index, key] of keys.entries())
    {
      if(this.isArrayProperty(key))
        pointer = this.arrayProperty(pointer, key, index, keys)
      else
        pointer = this.objectProperty(pointer, key, index, keys)

      if(pointer === undefined) break
    }

    return pointer
  }

  find(path, obj)
  {
    const
    keys  = path.split(/\./),
    copy  = { ...obj }

    return this.findPath(copy, keys)
  }
}

module.exports = DeepFind
