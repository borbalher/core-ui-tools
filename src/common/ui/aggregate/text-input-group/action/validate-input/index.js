/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor({
    textInputGroupComposer,
    store
  })
  {
    this.store                  = store
    this.textInputGroupComposer = textInputGroupComposer
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
    textInputGroupsType = this.store.getEntityType(context.schema),
    textInputGroups     = this.store.getEntities(textInputGroupsType),
    textInputType       = this.store.getEntityType(context.input.schema),
    textInputs          = this.store.getEntities(textInputType)

    textInputGroups.byId[context.id] = {
      ...textInputGroups.byId[context.id],
      value,
      error
    }

    textInputs.byId[context.input.id] = {
      ...textInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(textInputGroupsType, textInputGroups)
    state = this.store.setEntities(textInputType, textInputs)

    return state
  }
}

module.exports = ValidateTextInputAction
