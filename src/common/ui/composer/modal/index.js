const ComponentComposer = require('common/ui/composer/component')

/**
 * Modal composer
 * @class
 */
class ModalComposer extends ComponentComposer
{
  compose({
    actions   = [],
    renderonchange,
    headerText,
    template,
    parentId,
    classes,
    formId,
    schema,
    isOpen,
    name,
    id,
    ...args
  })
  {
    const modal = super.compose({
      ...args,
      renderonchange,
      headerText,
      parentId,
      template,
      actions,
      classes,
      schema,
      formId,
      isOpen,
      name,
      id
    })

    return modal
  }
}

module.exports = ModalComposer
