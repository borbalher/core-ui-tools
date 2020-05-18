/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor({
    checkboxInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.checkboxInputGroupComposer = checkboxInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required }, label } = context

    let error

    if(required && (!value || value.trim() === ''))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }

    const
    checkboxInputGroupsType = this.store.getEntityType(context.schema),
    checkboxInputGroups     = this.store.getEntities(checkboxInputGroupsType),
    checkboxInputType       = this.store.getEntityType(context.input.schema),
    checkboxInputs          = this.store.getEntities(checkboxInputType)

    checkboxInputGroups.byId[context.id] = {
      ...checkboxInputGroups.byId[context.id],
      value,
      error
    }

    checkboxInputs.byId[context.input.id] = {
      ...checkboxInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(checkboxInputGroupsType, checkboxInputGroups)
    state = this.store.setEntities(checkboxInputType, checkboxInputs)

    return state
  }
}

module.exports = ValidateInputAction
