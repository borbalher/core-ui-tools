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

  wrapComponent(component, template)
  {
    const { wrapper, schema, id, classList } = component

    return `<${wrapper} id="${id}" class="${classList.join(' ')}" data-component="${schema}">${template}</${wrapper}>`
  }

  create()
  {
    return (component, desc) =>
    {
      try
      {
        const
        handlebars        = this.locator.locate('view/handlebars'),
        template          = handlebars.compileTemplate(component.template, component),
        wrappedComponent  = this.wrapComponent(component, template),
        safeStringView    = this.getSafeString(wrappedComponent)

        return safeStringView
      }
      catch(error)
      {
        console.log(desc)
        throw new ComponentHelperError(`Error while mounting the component: ${error.message}`)
      }
    }
  }
}

module.exports = HandlebarsHelperComponent
