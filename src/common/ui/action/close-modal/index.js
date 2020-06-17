/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute({ data: { modalId, modalSchema } })
  {
    const context = this.store.getEntityContext(modalSchema, modalId)
    return this.store.addEntityContextToState(modalSchema, { ...context, isOpen: false })
  }
}

module.exports = CloseModalAction
