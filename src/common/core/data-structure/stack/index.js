class Stack
{
  constructor()
  {
    this.items = []
  }

  stack(element)
  {
    this.items.push(element)
  }

  pop()
  {
    if(!this.isEmpty())
      return this.items.pop()
    return undefined
  }

  peek()
  {
    return this.items[this.items.length - 1]
  }

  isEmpty()
  {
    return this.items.length === 0
  }

  reset()
  {
    this.items = []
  }

  get [Symbol.toStringTag]()
  {
    return 'Stack'
  }
}

module.exports = Stack
