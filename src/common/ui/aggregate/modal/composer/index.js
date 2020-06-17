const ComponentComposer = require('common/ui/aggregate/component/composer')

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
    parentId,
    classes,
    schema,
    isOpen,
    name,
    body,
    id
  })
  {
    const modal = super.compose({
      template : 'modal',
      body     : super.compose({
        ...body,
        id       : `${id}-body`,
        name     : 'body',
        parentId : id
      }),
      renderonchange,
      headerText,
      parentId,
      actions,
      classes,
      schema,
      isOpen,
      name,
      id
    })

    return modal
  }
}

module.exports = ModalComposer
