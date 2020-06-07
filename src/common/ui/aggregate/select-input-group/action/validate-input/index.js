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
    { required, label } = context

    let error

    if(required && (!value || value.length === 0))
      error = `${label} is required`

    return {
      ...state,
      entities :
      {
        ...state.entities,
        selectInputGroup :
        {
          ...state.entities.selectInputGroup,
          byId :
          {
            ...state.entities.selectInputGroup.byId,
            [context.id] :
            {
              ...state.entities.selectInputGroup.byId[context.id],
              value,
              error
            }
          }
        }
      }
    }
  }
}

module.exports = ValidateTextInputAction
