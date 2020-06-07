/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor(store, textInputGroupComposer)
  {
    this.store                  = store
    this.textInputGroupComposer = textInputGroupComposer
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

    return this.store.addEntityContextToState(schema, this.textInputGroupComposer.compose({
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
    //     textInput :
    //     {
    //       ...state.entities.textInput,
    //       byId :
    //       {
    //         ...state.entities.textInput.byId,
    //         [context.input.id] :
    //         {
    //           ...state.entities.textInput.byId[context.input.id],
    //           value
    //         }
    //       }
    //     },
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

module.exports = ValidateTextInputAction
