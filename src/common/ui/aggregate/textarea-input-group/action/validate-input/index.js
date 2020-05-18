/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
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
    textareaInputGroup = this.textInputGroupComposer.compose({
      ...context,
      value,
      error
    }),
    entities = this.store.normalizeEntityContext(schema, textareaInputGroup)

    return this.store.merge(entities)
  }
}

module.exports = ValidateTextInputAction
