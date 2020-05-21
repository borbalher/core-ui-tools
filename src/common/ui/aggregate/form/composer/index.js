const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * Form composer
 * @class
 */
class FormComposer extends ComponentComposer
{
  constructor(...args)
  {
    super(...args)
    this.configuration = this.locator.locate('core/configuration')
  }

  getFormOptions(template)
  {
    this.options   = this.configuration.find(`ui.component.${template}`) || {}
    this.bindings  = this.options.bindings  ? this.options.bindings  : []
    this.listeners = this.options.listeners ? this.options.listeners : []
  }

  compose({
    listeners = [],
    bindings  = [],
    renderonchange,
    parentId,
    template,
    isValid,
    classes,
    disabled,
    schema,
    title,
    data,
    name,
    id,
    ...args
  })
  {
    this.getFormOptions(template)

    const
    form    = super.compose({
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      renderonchange,
      disabled,
      parentId,
      template,
      isValid,
      classes,
      schema,
      title,
      data,
      name,
      id,
      ...args
    })

    return form
  }
}

module.exports = FormComposer
