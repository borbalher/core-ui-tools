/**
 * @implements {superhero/core/eventbus/observer}
 */
class OpenModalObserver
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
      state[key] = { ...state[key], isOpen: true }

    return state
  }
}

module.exports = OpenModalObserver
