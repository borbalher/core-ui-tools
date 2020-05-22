/**
 * @implements {common/core/reducer/action}
 */
class AddNodeAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const
    { data: { node } } = action
    return this.store.addEntityContextToState('entity/node', node)
  }
}

module.exports = AddNodeAction
