/**
 * @implements {common/core/reducer/action}
 */
class UnblockPageAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    return { ...state, ui: { ...state.ui, isBlocked: false } }
  }
}

module.exports = UnblockPageAction
