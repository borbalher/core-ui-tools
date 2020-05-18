/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalAction
{
  constructor(store, coreString)
  {
    this.store      = store
    this.coreString = coreString
  }

  execute(action, state)
  {
    const
    { meta: { emitter, schema } } = action,
    modalType = this.store.getEntityType(schema),
    modals    = this.store.getEntities(modalType)

    modals.byId[emitter] = {
      ...modals.byId[emitter],
      isOpen : false
    }

    state = this.store.setEntities(modalType, modals)
    return state
  }
}

module.exports = CloseModalAction
