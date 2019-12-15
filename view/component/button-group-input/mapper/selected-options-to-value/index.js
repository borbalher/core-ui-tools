class SelectedOptionsToValueMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.selectedOptions
    }
  }
}

module.exports = SelectedOptionsToValueMapper
