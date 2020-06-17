/**
 * @implements {common/core/reducer/action}
 */
class PrevPagesClickedActionAction
{
  constructor({ store, paginationComposer })
  {
    this.store              = store
    this.paginationComposer = paginationComposer
  }
  execute({ meta: { emitter, schema } })
  {
    const
    context                  = this.store.getEntityContext(schema, emitter),
    { selectedPage, offset } = context

    let newSelectedPage = selectedPage - (offset * 2)

    if(newSelectedPage < 1)
      newSelectedPage = 1

    const newContext = this.paginationComposer.compose({
      ...context,
      selectedPage : newSelectedPage
    })

    return  this.store.addEntityContextToState(newContext)
  }
}

module.exports = PrevPagesClickedActionAction
