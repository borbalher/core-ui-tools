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
    return { ...state, domain: { ...state.domain, isBlocked: true } }
  }
}

module.exports = BlockPageAction
