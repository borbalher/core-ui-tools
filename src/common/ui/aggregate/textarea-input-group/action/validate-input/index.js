/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor(store, textareaInputGroupComposer)
  {
    this.store                      = store
    this.textareaInputGroupComposer = textareaInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let message, code

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    return this.store.addEntityContextToState(schema, this.textareaInputGroupComposer.compose({
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

module.exports = ValidateTextInputAction
