/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const { data: { modal } } = action

    state[modal] = { ...state[modal], isOpen: false }

    this.store.dispatchAfter(this.store.composeAction('emit.event', {
      event   : 'modal.closed',
      payload : { },
      channel : modal
    }))

    return state
  }
}

module.exports = CloseModalAction
