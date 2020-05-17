/* eslint-disable no-undef */
const ComponentController = require('common/ui/aggregate/component/controller')

class Modal extends ComponentController
{
  dispatchAction(action)
  {
    this.store.dispatch(this.store.composeAction(action, { modal: this[Symbol.for('id')] }))
  }
}

module.exports = Modal
