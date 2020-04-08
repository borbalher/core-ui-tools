const Component = require('..')

class SelectInputComponent extends Component
{
  validateInputData(selectInputId)
  {
    const selectInput = this.getComponent(selectInputId)

    if(selectInput.required && !selectInput.data)
    {
      selectInput.error        = true
      selectInput.errorMessage = `${selectInput.label} is required`
    }
    else
    {
      selectInput.error        = false
      selectInput.errorMessage = undefined
    }

    this.emit(selectInputId, 'input.data.validated', { id: selectInputId, hasError: selectInput.error })
    this.setComponent(selectInputId, selectInput)
  }

  findById(id, element)
  {
    return element.id === id
  }

  findItem(array, id)
  {
    return array.find(this.findById.bind(this, id))
  }

  setInputData(selectInputId, data)
  {
    const
    selectInput  = this.getComponent(selectInputId),
    selectedIds  = data.map((option) =>
    {
      return option.value
    })

    let selectedItems = []
    selectInput.items = selectInput.items.map((item) =>
    {
      item.selected = selectedIds.indexOf(item.id) !== -1

      if(item.selected)
        selectedItems = [ ...selectedItems, item]

      return item
    })

    if(selectInput.multiple)
      selectInput.data = selectedItems
    else
      selectInput.data = selectedItems[0]

    this.emit(selectInputId, 'input.data.setted', { id: selectInputId, data: selectInput.data })
    this.setComponent(selectInputId, selectInput)
  }
}

module.exports = SelectInputComponent
