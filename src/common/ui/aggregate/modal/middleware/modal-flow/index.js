class ModalOpenerFlowMiddleware
{
  constructor({ actionComposer })
  {
    this.actionComposer = actionComposer
  }

  middleware()
  {
    return  store => next => action =>
    {
      next(action)

      const { meta: { schema, emitter, name }, data } = action

      switch(name)
      {
      case 'dispatch.action':
      {
        const { action } = data
        store.dispatch(this.actionComposer.compose(action, { modalId: emitter, modalSchema: schema }))
        break
      }
      }
    }
  }
}

module.exports = ModalOpenerFlowMiddleware
