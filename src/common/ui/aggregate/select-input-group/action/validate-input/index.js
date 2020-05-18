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
    selectInputGroupsType = this.store.getEntityType(context.schema),
    selectInputGroups     = this.store.getEntities(selectInputGroupsType),
    selectInputType       = this.store.getEntityType(context.input.schema),
    selectInputs          = this.store.getEntities(selectInputType)

    selectInputGroups.byId[context.id] = {
      ...selectInputGroups.byId[context.id],
      value,
      error
    }

    selectInputs.byId[context.input.id] = {
      ...selectInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(selectInputGroupsType, selectInputGroups)
    state = this.store.setEntities(selectInputType, selectInputs)

    return state
  }
}

module.exports = ValidateTextInputAction
