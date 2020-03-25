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
    schema
  })
  {
    const form = this.componentComposer.create({
      id,
      body,
      name,
      title,
      schema,
      wrapper  : 'form',
      template : 'form'
    })

    return form
  }
}

module.exports = FormComposer

