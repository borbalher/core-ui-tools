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
    return { ...state, domain: { ...state.domain, isBlocked: false } }
  }
}

module.exports = UnblockPageAction
