const ComponentController = require('common/ui/aggregate/component/controller')

class TableController extends ComponentController
{
  actionClicked(action, index)
  {
    this.emit('action', { action, index })
  }
}

module.exports = TableController
