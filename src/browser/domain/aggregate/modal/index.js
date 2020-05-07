/* eslint-disable no-undef */
const Component = require('../component')

class Modal extends Component
{
  dispatchAction(action)
  {
    this.store.dispatch(this.store.composeAction(action, { modal: this[Symbol.for('id')] }))
  }
}

module.exports = Modal
