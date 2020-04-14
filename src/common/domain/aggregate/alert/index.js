const Component = require('core-ui-tools/common/domain/aggregate/component')

class Alert extends Component
{
  async showAlert(message)
  {
    alert(message)
  }
}

module.exports = Alert
