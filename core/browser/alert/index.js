const Component = require('core-ui-tools/view/ui')

class Alert extends Component
{
  async showAlert(message)
  {
    alert(message)
  }

}

module.exports = Alert
