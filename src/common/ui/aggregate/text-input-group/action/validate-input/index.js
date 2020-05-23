/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor({
    textInputGroupComposer,
    virtualDOM,
    store
  })
  {
    this.store                  = store
    this.virtualDOM             = virtualDOM
    this.textInputGroupComposer = textInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    context = this.virtualDOM.getContext(schema, emitter),
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

    const textInputGroup = this.textInputGroupComposer.compose({
      ...context,
      error :
      {
        ...context.error,
        ...error
      }
    })

    this.virtualDOM.setContext(textInputGroup)

    return state
  }
}

module.exports = ValidateTextInputAction
