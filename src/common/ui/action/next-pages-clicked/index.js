/**
 * @implements {common/core/reducer/action}
 */
class NextPagesClickedActionAction
{
  constructor({ store, paginationComposer })
  {
    this.store              = store
    this.paginationComposer = paginationComposer
  }

  execute({ meta: { emitter, schema } })
  {
    const
    context                            = this.store.getEntityContext(schema, emitter),
    { selectedPage, offset, lastPage } = context

    let newSelectedPage = selectedPage + (offset * 2)

    if(newSelectedPage > lastPage)
      newSelectedPage = lastPage

    const newContext = this.paginationComposer.compose({
      ...context,
      selectedPage : newSelectedPage
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = NextPagesClickedActionAction
