class SelectedOptionsToDataMapper
{
  map(domEvent)
  {

    const
    selectedOptions = domEvent.target.selectedOptions,
    selectedIds     = selectedOptions.map((option) =>
    {
      return option.value
    })

    return {
      value : selectedIds
    }
  }
}

module.exports = SelectedOptionsToDataMapper
