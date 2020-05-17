/**
 * @implements {superhero/core/eventbus/observer}
 */
class OpenModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const { data: { modal } } = action

    state[modal] = { ...state[modal], isOpen: true }

    this.store.dispatchAfter(this.store.composeAction('emit.event', {
      event   : 'modal.opened',
      payload : { },
      channel : modal
    }))

    return state
  }
}

module.exports = OpenModalAction
