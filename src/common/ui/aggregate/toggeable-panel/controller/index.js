const ComponentController = require('common/ui/aggregate/component/controller')

class ToggleablePanelController extends ComponentController
{
  togglePanel(value)
  {
    const togglePanelContext = this.getControllerContext()

    this.setControllerContext({
      ...togglePanelContext,
      toggle :
      {
        ...togglePanelContext.toggle,
        value
      }
    })

    this.emit('panel.toggled', { value })
  }
}

module.exports = ToggleablePanelController
