const ComponentHelperError = require('./error/component-helper-error')


class HandlebarsHelperComponent
{
  constructor({ templateFactory })
  {
    this.templateFactory = templateFactory
  }

  create()
  {
    return (component, options) =>
    {
      const isOptions = !options

      try
      {
        let
        tag,
        props

        if(isOptions)
        {
          const
          { hash } = component

          tag      = hash.tag

          delete component.hash.tag

          props = component.hash
        }
        else
        {
          tag   = component.tag
          props = component.props
        }

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
