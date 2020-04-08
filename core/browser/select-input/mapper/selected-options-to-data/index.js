class SelectedOptionsToDataMapper
{
  map(domEvent)
  {
    return {
      data : domEvent.target.selectedOptions
    }
  }
}

module.exports = SelectedOptionsToDataMapper
