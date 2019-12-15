class Store
{
  constructor(deepclone, bus)
  {
    this.deepclone     = deepclone
    this.bus           = bus

    this.previousState = undefined
    this.state         = undefined
  }

  setState(state)
  {
    this.previousState = this.state
    this.state         = state

    this.emit('store.state.changed', { state })
  }

  getState()
  {
    return this.deepclone.clone(this.state)
  }

  getPreviousState()
  {
    return this.previousState
  }

  emit(event, data)
  {
    this.bus.emit('store', event, data)
  }
}

module.exports = Store
