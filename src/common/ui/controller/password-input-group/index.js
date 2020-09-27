const Component = require('../component')

class PasswordInputGroup extends Component
{
  constructor({ ...args })
  {
    super({ ...args })

    this.channel.on('component.rendered', (event) =>
    {
      this.addOnChangeListener()
    })
  }

  addOnChangeListener()
  {
    this.node.querySelector('input[type="password"]').addEventListener('change', this.handleOnChange.bind(this))
  }

  handleOnChange(event)
  {
    this.dispatch('validate.password.input.group', { value: event.target.value })
  }
}

module.exports = PasswordInputGroup
