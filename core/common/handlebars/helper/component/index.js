const ComponentHelperError = require('./error/component-helper-error')


class HandlebarsHelperComponent
{
  constructor(locator)
  {
    this.locator = locator
  }

  // readFile(path)
  // {
  //   try
  //   {
  //     const fileContent = this.fs.readFileSync(path, 'utf-8')
  //     return fileContent
  //   }
  //   catch(error)
  //   {
  //     throw new ComponentHelperError(`Error reading component file: ${error.message}`)
  //   }
  // }

  // getComponentPath(schema)
  // {
  //   return `${this.path.main.baseDir}/view/template/${schema}.hbs`
  // }

  // getTemplate(component)
  // {
  //   const
  //   path      = component.template ? component.template : component.schema,
  //   file      = this.getComponentPath(path),
  //   template  = this.readFile(file)

  //   return template
  // }

  // getPrecompiledView(component)
  // {
  //   const
  //   template        = this.getTemplate(component),
  //   html            = this.getHTML(component, template),
  //   precompiledView = this.hbs.compile(html)

  //   return precompiledView
  // }

  getSafeString(html)
  {
    const hbs = this.locator.locate('core/handlebars').handlebars
    return new hbs.SafeString(html)
  }

  wrapComponent(component, template)
  {
    const { wrapper, schema, id } = component

    return `<${wrapper} id="${id}" data-component="${schema}"> ${template}</${wrapper}>`
  }

  create()
  {
    return (component) =>
    {
      try
      {
        const
        handlebars        = this.locator.locate('core/handlebars'),
        template          = handlebars.compileTemplate(component.template, component),
        wrappedComponent  = this.wrapComponent(component, template),
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
