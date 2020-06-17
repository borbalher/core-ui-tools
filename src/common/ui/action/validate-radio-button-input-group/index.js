/**
 * @implements {common/core/reducer/action}
 */
class ValidateRadioButtonInputAction
{
  constructor({
    radioButtonInputGroupComposer,
    store
  })
  {
    this.store                         = store
    this.radioButtonInputGroupComposer = radioButtonInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context    = this.store.getEntityContext(schema, emitter),
    newContext = this.radioButtonInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityContextToState(schema, newContext)
  }
}

module.exports = ValidateRadioButtonInputAction
