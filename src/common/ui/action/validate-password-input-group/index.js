/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
{
  constructor({
    passwordInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.passwordInputGroupComposer = passwordInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.passwordInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidatePasswordInputAction
