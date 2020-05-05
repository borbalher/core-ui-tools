const Component = require('../component')

class ButtonGroupInputGroupGroupComponent extends Component
{
  selectButton(value)
  {
    const
    buttonGroupInputGroup  = this.getComponentContext(),
    { input: { buttons } } = buttonGroupInputGroup

    this.setComponentContext({
      ...buttonGroupInputGroup,
      input :
      {
        ...buttonGroupInputGroup.input,
        value,
        selectedButton : value,
        buttons        : buttons.map((button) =>
        {
          return {
            ...button,
            selected : button.id === value
          }
        })
      }
    })

    this.emit('button.selected', { value })
  }
}

module.exports = ButtonGroupInputGroupGroupComponent
