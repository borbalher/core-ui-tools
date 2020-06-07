/**
 * @implements {common/core/reducer/action}
 */
class ValidateDateInputAction
{
  // TODO add dictionary
  constructor({ store, coreMoment })
  {
    this.store      = store
    this.coreMoment = coreMoment
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { placeholder, required, title }, label, afterDate, locale } = context

    let message, code

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }
    else if(!this.coreMoment.isDateValid(value, placeholder))
    {
      message = title ? title : `Format invalid`
      code    = 'E_INPUT_FORMAT_INVALID'
    }
    else if(!this.coreMoment.isValid(value, placeholder, locale))
    {
      message = `Date must have the following format: ${placeholder}`
      code    = 'E_DATE_INVALID'
    }
    else if(afterDate && !this.coreMoment.isAfter(value, afterDate, locale))
    {
      message = `Date must be after ${afterDate}`
      code    = 'E_DATE_INVALID'
    }

    return {
      ...state,
      entities :
      {
        ...state.entities,
        textInput :
        {
          ...state.entities.textInput,
          byId :
          {
            ...state.entities.textInput.byId,
            [context.input.id] :
            {
              ...state.entities.textInput.byId[context.input.id],
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

module.exports = ValidateDateInputAction
