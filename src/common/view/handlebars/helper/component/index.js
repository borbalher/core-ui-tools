const ComponentHelperError = require('./error/component-helper-error')


class HandlebarsHelperComponent
{
  constructor({ templateFactory })
  {
    this.templateFactory = templateFactory
  }

  create()
  {
    return (component) =>
    {
      try
      {
        const { tag, props } = component
        return this.templateFactory.create({ tag }).render({ props })
      }
      catch(error)
      {
        throw new ComponentHelperError(`Error while mounting the component: ${error.message}`)
      }
    }
  }
}

module.exports = HandlebarsHelperComponent
