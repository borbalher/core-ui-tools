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

  execute({ meta: { emitter, schema }, data: { value } }, state)
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
    entities            = this.store.getEntities(),
    textareaInputGroups = this.store.getEntities('textareaInputGroup'),
    textareaInputs      = this.store.getEntities('textareaInput')

    textareaInputGroups.byId[context.id] =
    {
      ...textareaInputGroups.byId[context.id],
      value,
      error
    }

    textareaInputs.byId[context.input.id] =
    {
      ...textareaInputs.byId[context.input.id],
      value
    }

    return {
      ...state,
      entities :
      {
        ...entities,
        textareaInputGroup : { ...textareaInputGroups },
        textareaInput      : { ...textareaInputs }
      }
    }
  }
}

module.exports = ValidateTextInputAction
