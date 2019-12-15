class InputValueMapperMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.value
    }
  }
}

module.exports = InputValueMapperMapper
