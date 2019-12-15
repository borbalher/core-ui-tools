class ListenerContractNotHoneredError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_BUS_LISTENER_CONTRACT_NOT_HONERED'
  }
}

module.exports = ListenerContractNotHoneredError
