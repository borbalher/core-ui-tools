/**
 * @implements {common/core/reducer/action}
 */
class ValidateDateInputAction
{
  constructor({
    dateInputGroupComposer,
    store
  })
  {
    this.store                  = store
    this.dateInputGroupComposer = dateInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.dateInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateDateInputAction
