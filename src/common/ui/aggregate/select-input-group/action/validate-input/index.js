/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
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
    { input: { required }, label } = context

    let message, code

    if(required && (!value || value.length === 0))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    return {
      ...state,
      entities :
      {
        ...state.entities,
        selectInput :
        {
          ...state.entities.selectInput,
          byId :
          {
            ...state.entities.selectInput.byId,
            [context.input.id] :
            {
              ...state.entities.selectInput.byId[context.input.id],
              value
            }
          }
        },
        error :
        {
          ...state.entities.error,
          byId :
          {
            ...state.entities.error.byId,
            [context.error.id] :
            {
              ...state.entities.error.byId[context.error.id],
              message,
              code
            }
          }
        }
      }
    }
  }
}

module.exports = ValidateTextInputAction
