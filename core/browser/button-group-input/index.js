const Component = require('..')

class ButtonGroupInputComponent extends Component
{
  validateInputData(buttonGroupInputId)
  {
    const buttonGroupInput = this.getComponent(buttonGroupInputId)

    if(buttonGroupInput.required && !buttonGroupInput.data)
    {
      buttonGroupInput.error        = true
      buttonGroupInput.errorMessage = `${buttonGroupInput.label} is required`
    }
    else
    {
      buttonGroupInput.error        = false
      buttonGroupInput.errorMessage = undefined
    }

    this.emit(buttonGroupInputId, 'input.data.validated', { id: buttonGroupInputId, hasError: buttonGroupInput.error })
    this.setComponent(buttonGroupInputId, buttonGroupInput)
  }


  findById(id, element)
  {
    return element.id === id
  }

  findItem(array, id)
  {
    return array.find(this.findById.bind(this, id))
  }

  setInputData(buttonGroupInputId, data)
  {
    const buttonGroupInput  = this.getComponent(buttonGroupInputId)

    buttonGroupInput.buttons = buttonGroupInput.buttons.map((button) =>
    {
      if(button.id === data)
        button.selected = true
      else
        button.selected = false

      return button
    })

    buttonGroupInput.data = data

    this.emit(buttonGroupInputId, 'input.data.setted', { id: buttonGroupInputId, data })
    this.setComponent(buttonGroupInputId, buttonGroupInput)
  }
}

module.exports = ButtonGroupInputComponent
