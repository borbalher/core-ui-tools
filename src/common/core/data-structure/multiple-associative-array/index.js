const AssociativeArray = require('../associative-array')

class MultipleAssociativeArray extends AssociativeArray
{
  constructor(iterable, object)
  {
    super(iterable)
    this.object = object
  }

  setItem(key, value)
  {
    if(super.getItem(key))
    {
      const elements = super.getItem(key)
      elements.push(value)

      super.setItem(key, elements)
    }
    else
    {
      super.setItem(key, [value])
    }
  }

  hasElements(key)
  {
    return Array.isArray(super.getItem(key)) && super.getItem(key).length !== 0
  }

  getElementIndex(key, value)
  {
    const hasElements = this.hasElements(key)

    if(hasElements && typeof value !== 'object')
    {
      return super.getItem(key).indexOf(value)
    }
    else if(hasElements && typeof value === 'object')
    {
      const elements = this.getItem(key)
      for(let i = 0; i < elements.length; i++)
      {
        if(this.object.isEqual(elements[i], value))
          return i
      }
    }

    return -1
  }

  removeElement(key, value)
  {
    const index = this.getElementIndex(key, value)

    if(index > -1)
    {
      const elements = super.getItem(key)

      elements.splice(index, 1)

      super.getItem(key, elements)
    }
  }

  get [Symbol.toStringTag]()
  {
    return 'MultipleAssociativeArray'
  }
}

module.exports = MultipleAssociativeArray
