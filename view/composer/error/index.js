class ErrorComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    name,
    message,
    hasError = false
  })
  {
    const error = this.componentComposer.create({
      id,
      name,
      message,
      hasError,
      schema : 'error'
    })

    return error
  }
}

module.exports = ErrorComposer
