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
    const
    { meta: { emitter, schema } } = action,
    context = this.store.getEntityContext(schema, emitter),
    { entities } = this.store.normalizeEntityContext(schema, { ...context, isOpen: false })

    return this.store.addEntitiesToState(entities, state)
  }
}

module.exports = CloseModalAction
