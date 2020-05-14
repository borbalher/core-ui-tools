const Component = require('../component')

class CheckboxPanelComponent extends Component
{
  togglePanel(value)
  {
    const togglePanelContext = this.getComponentContext()

    this.setComponentContext({
      ...togglePanelContext,
      showPanel :
      {
        ...togglePanelContext.showPanel,
        value
      }
    })

    this.emit('panel.toggled', { value })
  }
}

module.exports = CheckboxPanelComponent
