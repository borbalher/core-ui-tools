class InputValueMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.checked
    }
  }
}

module.exports = InputValueMapper
