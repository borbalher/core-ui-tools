/**
 * @implements {common/core/reducer/action}
 */
class ValidateNumberInputAction
{
  constructor({
    numberInputGroupComposer,
    store
  })
  {
    this.store                    = store
    this.numberInputGroupComposer = numberInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.numberInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateNumberInputAction
