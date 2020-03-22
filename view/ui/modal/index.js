const Component = require('..')
class ModalComponent extends Component
{
  closeModal(modalId)
  {
    document.querySelector(`#${modalId} .modal`).classList.remove('--visible')

    const modalNode = this.getComponent(modalId)
    modalId.isOpen  = false

    this.emit(modalId, 'modal.closed', { id: modalId })
    this.setComponent(modalId, modalNode)
  }
}

module.exports = ModalComponent
