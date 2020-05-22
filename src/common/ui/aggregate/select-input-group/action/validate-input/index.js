/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor({
    selectInputGroupComposer,
    store
  })
  {
    this.store                    = store
    this.selectInputGroupComposer = selectInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let error

    if(required && (!value || value.length === 0))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }

    const
    selectInputGroup = this.selectInputGroupComposer.compose({
      ...context,
      value,
      error
    })

    return this.store.addEntityContextToState(schema, selectInputGroup)
  }
}

module.exports = ValidateTextInputAction
