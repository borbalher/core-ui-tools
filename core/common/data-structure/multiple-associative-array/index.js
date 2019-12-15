const AssociativeArray = require('../associative-array')

class MultipleAssociativeArray extends AssociativeArray
{
  constructor()
  {
    super()
    this[Symbol.for('schema')]  = 'data-structure/multiple-associative-array'
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

    if(hasElements)
      return super.getItem(key).indexOf(value)

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
