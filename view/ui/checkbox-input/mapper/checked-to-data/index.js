class CheckedToDataMapper
{
  map(domEvent)
  {
    return {
      data : domEvent.target.checked
    }
  }
}

module.exports = CheckedToDataMapper
