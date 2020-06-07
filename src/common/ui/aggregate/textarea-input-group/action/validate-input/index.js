/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextareaInputAction
{
  // TODO add dictionary
  constructor(store)
  {
    this.store = store
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { required, label } = context

    let error

    if(required && (!value || value.trim() === ''))
      error = `${label} is required`

    return {
      ...state,
      entities :
      {
        ...state.entities,
        textareaInputGroup :
        {
          ...state.entities.textareaInputGroup,
          byId :
          {
            ...state.entities.textareaInputGroup.byId,
            [context.id] :
            {
              ...state.entities.textareaInputGroup.byId[context.id],
              error,
              value
            }
          }
        }
      }
    }
  }
}

module.exports = ValidateTextareaInputAction
