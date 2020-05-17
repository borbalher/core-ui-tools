class InputValueMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.value
    }
  }
}

module.exports = InputValueMapper
