const Component = require('../component')

class RadioButtonInputGroupComponent extends Component
{
  buttonClicked(value)
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
  }
}

module.exports = RadioButtonInputGroupComponent
