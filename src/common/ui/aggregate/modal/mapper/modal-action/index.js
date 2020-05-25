class ModalActionMapper
{
  map(domEvent)
  {
    return {
      action : domEvent.target.dataset.action
    }
  }
}

module.exports = ModalActionMapper
