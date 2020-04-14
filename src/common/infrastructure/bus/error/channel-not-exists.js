class ChannelNotExistsError extends Error
{
  constructor(...a)
  {
    super(...a)
    this.code = 'E_BUS_CHANNEL_NOT_EXISTS'
  }
}

module.exports = ChannelNotExistsError
