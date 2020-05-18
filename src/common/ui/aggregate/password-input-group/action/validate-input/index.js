/**
 * @implements {common/core/reducer/action}
 */
class ValidateInputAction
{
  // TODO add dictionary
  constructor({
    passwordInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.passwordInputGroupComposer = passwordInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.store.getEntityContext(schema, emitter),
    { input: { required, pattern, title }, label } = context

    let error

    if(required && (!value || value.trim() === ''))
    {
      error = {
        message : `${label} is required`,
        code    : 'E_INPUT_REQUIRED'
      }
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
      {
        error = {
          message : title ? title : `Format invalid`,
          code    : 'E_INPUT_FORMAT_INVALID'
        }
      }
    }

    const
    passwordInputGroupsType = this.store.getEntityType(context.schema),
    passwordInputGroups     = this.store.getEntities(passwordInputGroupsType),
    passwordInputType       = this.store.getEntityType(context.input.schema),
    passwordInputs          = this.store.getEntities(passwordInputType)

    passwordInputGroups.byId[context.id] = {
      ...passwordInputGroups.byId[context.id],
      value,
      error
    }

    passwordInputs.byId[context.input.id] = {
      ...passwordInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(passwordInputGroupsType, passwordInputGroups)
    state = this.store.setEntities(passwordInputType, passwordInputs)

    return state
  }
}

module.exports = ValidateInputAction
