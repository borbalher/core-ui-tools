class FormComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    name = id,
    body,
    title,
    schema,
    submit,
    reset
  })
  {
    const form = this.componentComposer.create({
      id,
      body,
      name,
      reset,
      title,
      schema,
      submit,
      wrapper  : 'form',
      template : 'form'
    })

    return form
  }
}

module.exports = FormComposer

