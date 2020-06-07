/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
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

    if(required && !value)
      error = `${label} is required`

    return {
      ...state,
      entities :
      {
        ...state.entities,
        checkboxInputGroup :
        {
          ...state.entities.checkboxInputGroup,
          byId :
          {
            ...state.entities.checkboxInputGroup.byId,
            [context.id] :
            {
              ...state.entities.checkboxInputGroup.byId[context.id],
              error,
              value
            }
          }
        }
      }
    }
  }
}

module.exports = ValidateInputAction
