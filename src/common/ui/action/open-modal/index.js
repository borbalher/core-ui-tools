/**
 * @implements {superhero/core/eventbus/observer}
 */
class OpenModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute({ data: { modalId, modalSchema } })
  {
    const
    context = this.store.getEntityContext(modalSchema, modalId)
    return this.store.addEntityContextToState(modalSchema, { ...context, isOpen: true })
  }
}

module.exports = OpenModalAction
