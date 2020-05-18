/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor({
    radioButtonInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.radioButtonInputGroupComposer = radioButtonInputGroupComposer
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
    radioButtonInputGroupsType = this.store.getEntityType(context.schema),
    radioButtonInputGroups     = this.store.getEntities(radioButtonInputGroupsType),
    radioButtonInputType       = this.store.getEntityType(context.input.schema),
    radioButtonInputs          = this.store.getEntities(radioButtonInputType)

    radioButtonInputGroups.byId[context.id] = {
      ...radioButtonInputGroups.byId[context.id],
      value,
      error
    }

    radioButtonInputs.byId[context.input.id] = {
      ...radioButtonInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(radioButtonInputGroupsType, radioButtonInputGroups)
    state = this.store.setEntities(radioButtonInputType, radioButtonInputs)

    return state
  }
}

module.exports = ValidateInputAction
