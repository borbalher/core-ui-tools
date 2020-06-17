const ComponentComposer = require('common/ui/composer/component')
/**
 * NumberInpuPageComposertGroup composer
 * @class
 */
class PageComposer extends ComponentComposer
{
  compose({
    renderonchange,
    template,
    classes,
    schema,
    title,
    name,
    id,
    ...args
  })
  {
    const
    options                    = this.configuration.find(`ui.component.${id}`) || {},
    { css = [], scripts = [] } = options,
    page                       = super.compose({
      renderonchange,
      template,
      classes,
      scripts,
      schema,
      title,
      name,
      css,
      id,
      ...args
    })

    return page
  }
}

module.exports = PageComposer
