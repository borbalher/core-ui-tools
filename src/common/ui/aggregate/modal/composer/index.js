const ComponentComposer = require('common/ui/component/composer')

/**
 * Modal composer
 * @class
 */
class ModalComposer extends ComponentComposer
{
  compose({
    listeners = [],
    bindings  = [],
    actions   = [],
    renderonchange,
    headerText,
    parentId,
    classes,
    isOpen,
    name,
    body,
    id
  })
  {
    const modal = super.compose({
      schema   : 'entity/modal',
      template : 'modal',
      bindings : [
        ...this.bindings,
        ...bindings
      ],
      listeners : [
        ...this.listeners,
        ...listeners
      ],
      body : {
        ...body,
        id       : `${id}-body`,
        name     : 'body',
        parentId : id
      },
      renderonchange,
      headerText,
      parentId,
      actions,
      classes,
      isOpen,
      name,
      id
    })

    return modal
  }
}

module.exports = ModalComposer
