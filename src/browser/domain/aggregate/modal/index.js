/* eslint-disable no-undef */
const Component = require('../component')

class Modal extends Component
{
  openModal()
  {
    this.store.dispatch(this.store.composeAction('open.modal', { modal: this[Symbol.for('id')] }))
  }

  closeModal()
  {
    this.store.dispatch(this.store.composeAction('close.modal', { modal: this[Symbol.for('id')] }))
  }
}

module.exports = Modal
