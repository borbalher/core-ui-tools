class ModalComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    id,
    isOpen,
    headerText,
    body,
    confirmButton,
    actions
  })
  {
    const modal = this.componentComposer.create({
      isOpen,
      headerText,
      body,
      confirmButton,
      actions,
      id,
      template : 'modal',
      schema   : 'requested-to-change-order-status-modal'
    })

    return modal
  }
}

module.exports = ModalComposer
