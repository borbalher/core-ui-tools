class InputValueMapper
{
  map(domEvent)
  {
    return {
      action : domEvent.target.dataset.action
    }
  }
}

module.exports = InputValueMapper
