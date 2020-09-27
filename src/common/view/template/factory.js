
class TemplateFactory
{
  constructor({
    handlebars,
    Template
  })
  {
    this.handlebars = handlebars
    this.Template   = Template
  }

  create({ tag })
  {
    return new this.Template({
      tag,
      handlebars : this.handlebars
    })
  }
}

module.exports = TemplateFactory
