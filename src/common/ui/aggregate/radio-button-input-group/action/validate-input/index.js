/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor(store, radioButtonInputGroupComposer)
  {
    this.store                         = store
    this.radioButtonInputGroupComposer = radioButtonInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { required, label } = context

    let message, code

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }

    return this.store.addEntityContextToState(schema, this.radioButtonInputGroupComposer.compose({
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
