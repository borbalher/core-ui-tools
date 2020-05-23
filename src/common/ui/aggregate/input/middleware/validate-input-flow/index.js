class TextInputGroupFlow
{
  middleware()
  {
    return  store => next => action =>
    {
      next(action)

      const { meta: { name, schema, emitter } } = action

      switch(name)
      {
      case 'validate.select.input':
      case 'validate.textarea.input':
      case 'validate.radio.button.input':
      case 'validate.checkbox.input':
      case 'validate.text.input':
      case 'validate.password.input':
        const inputGroup = store.getEntityContext(schema, emitter)
        if(inputGroup.error.message)
          document.querySelector(`#${emitter}`).classList.add('--error')
        else
          document.querySelector(`#${emitter}`).classList.remove('--error')
        break
      }
    }
  }
}

module.exports = TextInputGroupFlow
