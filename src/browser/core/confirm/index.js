const Component = require('core-ui-tools/common/domain/aggregate/component')

class Confirm extends Component
{
  async showConfirm(message)
  {
    confirm(message)
  }
}

module.exports = Confirm
