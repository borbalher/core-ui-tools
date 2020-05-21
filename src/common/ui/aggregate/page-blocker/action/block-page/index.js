/**
 * @implements {common/core/reducer/action}
 */
class BlockPageAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    return { ...state, ui: { ...state.ui, isBlocked: true } }
  }
}

module.exports = BlockPageAction
