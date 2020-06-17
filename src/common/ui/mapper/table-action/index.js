class TableActionMapper
{
  map(domEvent)
  {
    return {
      action : domEvent.target.dataset.action,
      index  : Number(domEvent.target.parentElement.dataset.index)
    }
  }
}

module.exports = TableActionMapper
