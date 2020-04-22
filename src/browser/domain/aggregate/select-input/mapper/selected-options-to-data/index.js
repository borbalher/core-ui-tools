class SelectedOptionsToDataMapper
{
  map(domEvent)
  {

    const
    selectedOptions = domEvent.target.selectedOptions,
    selectedIds     = Array.from(selectedOptions).map((option) =>
    {
      return option.value
    })

    return {
      value : selectedIds
    }
  }
}

module.exports = SelectedOptionsToDataMapper
