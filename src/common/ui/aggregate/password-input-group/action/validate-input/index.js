/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
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
    { required, pattern, title, label } = context

    let error

    if(required && (!value || value.trim() === ''))
    {
      error = `${label} is required`
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
        error = title ? title : `Format invalid`
    }

    return {
      ...state,
      entities :
      {
        ...state.entities,
        passwordInputGroup :
        {
          ...state.entities.passwordInputGroup,
          byId :
          {
            ...state.entities.passwordInputGroup.byId,
            [context.id] :
            {
              ...state.entities.passwordInputGroup.byId[context.id],
              error,
              value
            }
          }
        }
      }
    }
  }
}

module.exports = ValidatePasswordInputAction
