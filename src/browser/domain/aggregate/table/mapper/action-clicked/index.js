class ActionClickedMapper
{
  map(domEvent)
  {
    return {
      data :
      {
        action : domEvent.target.dataset.action,
        index  : domEvent.target.parentElement.dataset.index
      }
    }
  }
}

module.exports = ActionClickedMapper
