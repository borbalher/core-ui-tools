class ComponentRepository
{
  constructor(controllers)
  {
    this.controllers = controllers
  }

  setController(id, component)
  {
    this.controllers.setItem(id, component)
  }

  reset()
  {
    this.controllers.clear()
  }

  getController(id)
  {
    return this.controllers.getItem(id)
  }
}

module.exports = ComponentRepository
