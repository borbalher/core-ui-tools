/**
 * @implements {common/core/reducer/action}
 */
class PageClickedActionAction
{
  constructor({ store, paginationComposer })
  {
    this.store              = store
    this.paginationComposer = paginationComposer
  }

  execute({ meta: { emitter, schema }, data: { page } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.paginationComposer.compose({
      ...context,
      selectedPage : page
    })

    return  this.store.addEntityContextToState(newContext)
  }
}

module.exports = PageClickedActionAction
