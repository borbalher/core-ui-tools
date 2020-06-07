/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor(store, checkboxInputGroupComposer)
  {
    this.store                      = store
    this.checkboxInputGroupComposer = checkboxInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let message, code

    if(required && !value)
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    return this.store.addEntityContextToState(schema, this.checkboxInputGroupComposer.compose({
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

module.exports = ValidateInputAction
