/**
 * @implements {common/core/reducer/action}
 */
class ToggleBlockerAction
{
  constructor(store)
  {
    this.store = store
  }

  execute({ meta: { emitter }, data: { isBlocked } }, state)
  {
    return {
      ...state,
      entities :
      {
        ...state.entities,
        pageBlocker :
        {
          ...state.entities.pageBlocker,
          byId :
          {
            ...state.entities.pageBlocker.byId,
            [emitter] :
            {
              ...state.entities.pageBlocker.byId[emitter],
              isBlocked
            }
          }
        }
      }
    }
  }
}

module.exports = ToggleBlockerAction
