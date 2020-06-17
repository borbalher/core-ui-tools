/**
 * @implements {common/core/reducer/action}
 */
class NextPageClickedActionAction
{
  constructor({ store, paginationComposer })
  {
    this.store              = store
    this.paginationComposer = paginationComposer
  }

  execute({ meta: { emitter, schema } }, state)
  {
    const
    context                    = this.store.getEntityContext(schema, emitter),
    { selectedPage, lastPage } = context

    if(selectedPage !== lastPage)
    {
      const
      nextPage   = selectedPage + 1,
      newContext = this.paginationComposer.compose({
        ...context,
        selectedPage : nextPage
      })

      return  this.store.addEntityContextToState(schema, newContext)
    }

    return state
  }
}

module.exports = NextPageClickedActionAction
