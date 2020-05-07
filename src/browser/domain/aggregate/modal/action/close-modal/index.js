/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalObserver
{
  constructor(coreString)
  {
    this.coreString = coreString
  }

  execute(action, state)
  {
    const
    { data: { modal } } = action,
    key                 = this.coreString.camelCase(modal)

    if(state[key])
      state[key] = { ...state[key], isOpen: false }

    return state
  }
}

module.exports = CloseModalObserver
