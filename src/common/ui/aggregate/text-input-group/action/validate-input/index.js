/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  constructor({
    textInputGroupComposer,
    store
  })
  {
    this.store                  = store
    this.textInputGroupComposer = textInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.textInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateTextInputAction
