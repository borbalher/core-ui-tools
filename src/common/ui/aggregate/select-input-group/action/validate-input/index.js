/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  constructor({
    selectInputGroupComposer,
    store
  })
  {
    this.store                    = store
    this.selectInputGroupComposer = selectInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.selectInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateTextInputAction
