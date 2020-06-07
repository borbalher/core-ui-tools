/**
 * @implements {common/core/reducer/action}
 */
class ValidateDateInputAction
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
        dateInputGroup :
        {
          ...state.entities.dateInputGroup,
          byId :
          {
            ...state.entities.dateInputGroup.byId,
            [context.id] :
            {
              ...state.entities.dateInputGroup.byId[context.id],
              value,
              error
            }
          }
        }
      }
    }
  }
}

module.exports = ValidateDateInputAction
