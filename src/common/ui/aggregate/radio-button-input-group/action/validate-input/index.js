/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor({
    radioButtonInputGroupComposer,
    store
  })
  {
    this.store                         = store
    this.radioButtonInputGroupComposer = radioButtonInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { required, label } = context

    let error

    if(required && (!value || value.trim() === ''))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }

    const
    radioButtonInputGroup = this.radioButtonInputGroupComposer.compose({
      ...context,
      value,
      error
    }),
    { entities } = this.store.normalizeEntityContext(schema, radioButtonInputGroup)

    return this.store.addEntitiesToState(entities, state)
  }
}

module.exports = ValidateInputAction
