/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor({
    selectInputGroupComposer,
    store
  })
  {
    this.store                    = store
    this.selectInputGroupComposer = selectInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let error

    if(required && (!value || value.length === 0))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }

    const
    entities          = this.store.getEntities(),
    selectInputGroups = this.store.getEntities('selectInputGroup'),
    selectInputs      = this.store.getEntities('selectInput')

    selectInputGroups.byId[context.id] =
    {
      ...selectInputGroups.byId[context.id],
      value,
      error
    }

    selectInputs.byId[context.input.id] =
    {
      ...selectInputs.byId[context.input.id],
      value
    }

    return {
      ...state,
      entities :
      {
        ...entities,
        selectInputGroup : { ...selectInputGroups },
        selectInput      : { ...selectInputs }
      }
    }
  }
}

module.exports = ValidateTextInputAction
