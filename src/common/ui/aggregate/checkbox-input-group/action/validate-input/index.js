/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor({
    checkboxInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.checkboxInputGroupComposer = checkboxInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let error

    if(required && (!value || value.trim() === ''))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }

    const
    checkboxInputGroup = this.checkboxInputGroupComposer.compose({
      ...context,
      value,
      error
    }),
    entities = this.store.normalizeEntityContext(schema, checkboxInputGroup)

    return this.store.merge(entities)
  }
}

module.exports = ValidateInputAction
