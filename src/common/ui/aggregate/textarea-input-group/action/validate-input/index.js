/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor({
    textareaInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.textareaInputGroupComposer = textareaInputGroupComposer
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
    textareaInputGroupsType = this.store.getEntityType(context.schema),
    textareaInputGroups     = this.store.getEntities(textareaInputGroupsType),
    textareaInputType       = this.store.getEntityType(context.input.schema),
    textareaInputs          = this.store.getEntities(textareaInputType)

    textareaInputGroups.byId[context.id] = {
      ...textareaInputGroups.byId[context.id],
      value,
      error
    }

    textareaInputs.byId[context.input.id] = {
      ...textareaInputs.byId[context.input.id],
      value
    }

    state = this.store.setEntities(textareaInputGroupsType, textareaInputGroups)
    state = this.store.setEntities(textareaInputType, textareaInputs)

    return state
  }
}

module.exports = ValidateTextInputAction
