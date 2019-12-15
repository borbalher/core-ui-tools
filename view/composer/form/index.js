class FormComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    schema,
    body,
    title
  })
  {
    const form = this.componentComposer.create({
      id,
      title,
      schema,
      body,
      template : 'form'
    })

    return form
  }
}

module.exports = FormComposer

