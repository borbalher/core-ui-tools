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
    const { event, payload, channel } = action

    this.bus.emit(channel, event, payload)

    return state
  }
}

module.exports = EmitEventAction
