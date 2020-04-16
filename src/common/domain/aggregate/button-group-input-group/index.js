const Component = require('../component')

class ButtonGroupInputGroupGroupComponent extends Component
{
  selectButton(buttonGroupInputGroupId, value)
  {
    const
    buttonGroupInputGroup  = this.getComponentContext(buttonGroupInputGroupId),
    { input: { buttons } } = buttonGroupInputGroup

    this.setComponent(buttonGroupInputGroupId, {
      ...buttonGroupInputGroup,
      input :
      {
        ...buttonGroupInputGroup.input,
        buttons : buttons.map((button) =>
        {
          return {
            ...button,
            selected : button.id === value
          }
        })
      }
    })

    this.emit(buttonGroupInputGroupId, 'button.selected', { value })
  }
}

module.exports = ButtonGroupInputGroupGroupComponent
