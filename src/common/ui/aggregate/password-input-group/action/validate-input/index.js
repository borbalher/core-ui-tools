/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
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
    conpassword = this.store.getEntityConpassword(schema, emitter),
    { input: { required, pattern, title }, label } = conpassword

    let message, code

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
      {
        message = title ? title : `Format invalid`
        code    = 'E_INPUT_FORMAT_INVALID'
      }
    }

    const passwordInputGroup = this.textInputGroupComposer.compose({
      ...context,
      error :
      {
        ...context.error,
        message,
        code
      }
    })

    return this.store.addEntityContextToState(schema, passwordInputGroup)
  }
}

module.exports = ValidatePasswordInputAction
