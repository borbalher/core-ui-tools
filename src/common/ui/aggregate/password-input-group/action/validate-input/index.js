/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
{
  // TODO add dictionary
  constructor(store, passwordInputGroupComposer)
  {
    this.store                      = store
    this.passwordInputGroupComposer = passwordInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required, pattern, title }, label } = context

    let message, code

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
      {
        message = title ? title : `Format invalid`
        code    = 'E_INPUT_FORMAT_INVALID'
      }
    }

    return this.store.addEntityContextToState(schema, this.passwordInputGroupComposer.compose({
      ...context,
      errorMessage : message,
      errorCode    : code,
      value
    }))

    // return {
    //   ...state,
    //   entities :
    //   {
    //     ...state.entities,
    //     error :
    //     {
    //       ...state.entities.error,
    //       byId :
    //       {
    //         ...state.entities.error.byId,
    //         [context.error.id] :
    //         {
    //           ...state.entities.error.byId[context.error.id],
    //           message,
    //           code
    //         }
    //       }
    //     }
    //   }
    // }
  }
}

module.exports = ValidatePasswordInputAction
