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
      id,
      body,
      isOpen,
      actions,
      headerText,
      confirmButton,
      template : 'modal',
      schema   : 'modal'
    })

    return modal
  }
}

module.exports = ModalComposer
