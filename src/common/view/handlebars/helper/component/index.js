const ComponentHelperError = require('./error/component-helper-error')


class HandlebarsHelperComponent
{
  constructor(locator)
  {
    this.locator = locator
  }

  getSafeString(html)
  {
    const hbs = this.locator.locate('view/handlebars').handlebars
    return new hbs.SafeString(html)
  }

  wrapComponent(tag, props, template)
  {
    return `<${tag} ${Object.entries(props).map(([name, value]) => `${name}="${value}"`)}>${template}</${tag}>`
  }

  create()
  {
    return (tag, props) =>
    {
      try
      {
        const
        handlebars        = this.locator.locate('view/handlebars'),
        template          = handlebars.compilePartial(tag, props),
        wrappedComponent  = this.wrapComponent(tag, props, template),
        safeStringView    = this.getSafeString(wrappedComponent)

        return safeStringView
      }
      catch(error)
      {
        throw new ComponentHelperError(`Error while mounting the component: ${error.message}`)
      }
    }
  }
}

module.exports = HandlebarsHelperComponent
