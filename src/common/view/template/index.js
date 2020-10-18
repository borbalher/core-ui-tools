// const Template = ({
//   handlebars,
//   tag,
// }) =>
// {
//   const
//   getSafeString = (html) =>
//   {
//     return new handlebars.SafeString(html)
//   },
//   wrapComponent = (props, template) =>
//   {
//     return `<${tag} ${Object.entries(props).map(([name, value]) => { return `${name}="${value}"` })}>${template}</${tag}>`
//   },
//   compilePartial = (props) =>
//   {
//     return handlebars.compilePartial(tag, props)
//   }

//   return class
//   {
//     render(props)
//     {
//       const
//       template            = compilePartial(props),
//       wrappedTemplate     = wrapComponent(props, template),
//       safeStringTemplate  = getSafeString(wrappedTemplate)

//       return safeStringTemplate
//     }
//   }
// }


// module.exports = Template

class Template
{
  constructor({ handlebars, tag })
  {
    this.handlebars = handlebars
    this.tag        = tag
  }

  getSafeString(html)
  {
    return new this.handlebars.handlebars.SafeString(html)
  }

  wrapComponent(props, template)
  {
    let wrappedComponent = `<${this.tag}`

    Object.entries(props).forEach(([name, value]) =>
    {
      wrappedComponent += ` ${name}="${value}" `
    })

    wrappedComponent += `>${template}</${this.tag}>`

    return wrappedComponent
  }

  compilePartial(props)
  {
    return this.handlebars.compilePartial(this.tag, props)
  }

  render({ props })
  {
    const
    template            = this.compilePartial(props),
    wrappedTemplate     = this.wrapComponent(props, template),
    safeStringTemplate  = this.getSafeString(wrappedTemplate)

    return safeStringTemplate
  }
}

module.exports = Template
