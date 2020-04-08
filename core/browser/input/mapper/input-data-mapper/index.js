class InputValueMapper
{
  map(domEvent)
  {
    return {
      data : domEvent.target.value
    }
  }
}

module.exports = InputValueMapper
