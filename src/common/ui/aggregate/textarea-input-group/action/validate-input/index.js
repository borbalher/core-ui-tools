/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextareaInputAction
{
  constructor({
    textareaInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.textareaInputGroupComposer = textareaInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.textareaInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateTextareaInputAction
