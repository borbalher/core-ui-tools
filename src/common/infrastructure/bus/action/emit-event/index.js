/**
 * @implements {superhero/core/eventbus/observer}
 */
class EmitEventAction
{
  constructor(bus)
  {
    this.bus = bus
  }

  execute(action, state)
  {
    const { data: { event, payload, channel } } = action

    setTimeout(() => this.bus.emit(channel, event, payload), 0)

    return state
  }
}

module.exports = EmitEventAction
