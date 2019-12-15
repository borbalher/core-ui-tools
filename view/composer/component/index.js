class ComponentComposer
{
  constructor(composer)
  {
    this.composer = composer
  }

  create({
    id,
    name     = id,
    key      = id,
    schema,
    template = schema,
    ...args
  })
  {
    return this.composer.compose(schema, {
      id,
      name,
      schema,
      template,
      ...args
    })
  }
}

module.exports = ComponentComposer
