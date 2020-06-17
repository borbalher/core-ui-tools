const ComponentComposer = require('common/ui/composer/component')
/**
 * Form composer
 * @class
 */
class FormComposer extends ComponentComposer
{
  compose({
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
    const
    form    = super.compose({
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
