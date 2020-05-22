/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
{
  // TODO add dictionary
  constructor({
    passwordInputGroupComposer,
    virtualDOM,
    store
  })
  {
    this.store                  = store
    this.virtualDOM             = virtualDOM
    this.passwordInputGroupComposer = passwordInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } }, state)
  {
    const
    conpassword = this.store.getEntityConpassword(schema, emitter),
    { input: { required, pattern, title }, label } = conpassword

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

    const passwordInputGroup = this.passwordInputGroupComposer.compose({
      ...context,
      error :
      {
        ...context.error,
        ...error
      }
    })

    this.virtualDOM.setContext(passwordInputGroup)

    return state
  }
}

module.exports = ValidatePasswordInputAction
