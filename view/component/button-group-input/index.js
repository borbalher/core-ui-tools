const Component = require('..')

class ButtonGroupInputComponent extends Component
{
  validateInput(inputId)
  {
    const inputNode = this.getComponentNode(inputId)

    inputNode.error = false

    this.emit(inputId, 'input.validated', { id: inputId, hasError: inputNode.error })
    this.setComponentNode(inputId, inputNode)
  }

  findById(id, element)
  {
    return element.id === id
  }

  findItem(array, id)
  {
    return array.find(this.findById.bind(this, id))
  }


  setInputValue(inputId, selectedOptions)
  {
    const selectInput  = this.getComponentNode(inputId)

    selectInput.items = selectInput.items.map((item) =>
    {
      item.selected = false
      return item
    })

    let selectedValues = []
    for(const option of selectedOptions)
    {
      const item  = this.findItem(selectInput.items, option.value)

      if(item)
      {
        item.selected = true
        selectedValues = [...selectedValues, option.value]
      }
    }


    if(selectInput.multiple && selectedValues.length)
      selectInput.value = selectedValues
    else if(!selectInput.multiple && selectedValues.length)
      selectInput.value = selectedValues[0]
    else
      selectInput.value = undefined

    this.emit(inputId, 'input.value.setted', { id: inputId, value: selectInput.value })
    this.setComponentNode(inputId, selectInput)
  }
}

module.exports = ButtonGroupInputComponent
