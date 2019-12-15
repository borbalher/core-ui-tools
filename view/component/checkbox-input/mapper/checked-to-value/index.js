class CheckedToValueMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.checked
    }
  }
}

module.exports = CheckedToValueMapper
