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
    { data: { node } } = action,
    { entities } = this.store.normalizeEntityContext('entity/node', node)

    return this.store.addEntitiesToState(entities, state)
  }
}

module.exports = AddNodeAction
