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
    entities            = this.store.getEntities(),
    checkboxInputGroups = this.store.getEntities('checkboxInputGroup'),
    checkboxInputs      = this.store.getEntities('checkboxInput')

    checkboxInputGroups.byId[context.id] =
    {
      ...checkboxInputGroups.byId[context.id],
      value,
      error
    }

    checkboxInputs.byId[context.input.id] =
    {
      ...checkboxInputs.byId[context.input.id],
      value
    }

    return {
      ...state,
      entities :
      {
        ...entities,
        checkboxInputGroup : { ...checkboxInputGroups },
        checkboxInput      : { ...checkboxInputs }
      }
    }
  }
}

module.exports = ValidateInputAction
