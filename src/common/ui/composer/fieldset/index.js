const ComponentComposer = require('common/ui/composer/component')

/**
 * Fieldset composer
 * @class
 */
class FieldsetComposer extends ComponentComposer
{
  compose({
    renderonchange,
    attributes,
    template,
    disabled,
    parentId,
    classes,
    formId,
    schema,
    legend,
    name,
    id,
    ...args
  })
  {
    const fieldset = super.compose({
      renderonchange,
      attributes,
      disabled,
      parentId,
      template,
      classes,
      schema,
      formId,
      legend,
      name,
      id,
      ...args
    })

    return fieldset
  }
}

module.exports = FieldsetComposer
