/**
 * @implements {common/core/reducer/action}
 */
class PrevPageClickedActionAction
{
  constructor({ store, paginationComposer })
  {
    this.store              = store
    this.paginationComposer = paginationComposer
  }

  execute({ meta: { emitter, schema } }, state)
  {
    const
    context  = this.store.getEntityContext(schema, emitter),
    { selectedPage, firstPage } = context

    if(selectedPage !== firstPage)
    {
      const
      prevPage   = selectedPage + 1,
      newContext = this.paginationComposer.compose({
        ...context,
        selectedPage : prevPage
      })

      return  this.store.addEntityContextToState(schema, newContext)
    }

    return state
  }
}

module.exports = PrevPageClickedActionAction
