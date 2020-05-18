/**
 * @implements {superhero/core/eventbus/observer}
 */
class OpenModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const
    { meta: { emitter, schema } } = action,
    modalType = this.store.getEntityType(schema),
    modals    = this.store.getEntities(modalType)

    modals.byId[emitter] = {
      ...modals.byId[emitter],
      isOpen : true
    }

    const newState = this.store.setEntities(modalType, modals)
    return newState
  }
}

module.exports = OpenModalAction
