const Component = require('..')
class ModalComponent extends Component
{
  closeModal(modalId)
  {
    document.querySelector(`#${modalId} .modal`).classList.remove('--visible')

    const modalNode = this.getComponentNode(modalId)
    modalId.isOpen  = false

    this.emit(modalId, 'modal.closed', { id: modalId })
    this.setComponentNode(modalId, modalNode)
  }
}

module.exports = ModalComponent
