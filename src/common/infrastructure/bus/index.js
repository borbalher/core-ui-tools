const AssociativeArray = require('common/core/data-structure/associative-array')

class Bus
{
  constructor(channelFactory)
  {
    this.channelFactory  = channelFactory
    this.channels        = new AssociativeArray()
  }

  createChannel(id)
  {
    return this.getChannel(id)
  }

  deleteChannel(id)
  {
    this.channels.removeItem(id)
  }

  getChannel(id)
  {
    const existsChannel = this.channels.getItem(id)

    if(!existsChannel)
    {
      const channel = this.channelFactory.create(id)
      this.channels.setItem(id, channel)

      return channel
    }

    return existsChannel
  }

  async emit(channelId, event)
  {
    const channel = this.getChannel(channelId)
    await channel.emit(event)
  }

  on(channelId, event, listener)
  {
    const channel = this.getChannel(channelId)
    return channel.on(event, listener)
  }

  once(channelId, event, listener)
  {
    this.getChannel(channelId)
      .once(event, listener)
  }

  onAll(channelId, listener)
  {
    this.getChannel(channelId)
      .onAll(listener)
  }

  removeListener(channelId, event, listener)
  {
    this.getChannel(channelId)
      .removeListener(event, listener)
  }

  removeAllListeners(channelId, event)
  {
    this.getChannel(channelId)
      .removeAllListeners(event)
  }

  clear(channelId)
  {
    this.getChannel(channelId)
      .clear()
  }

  get [Symbol.toStringTag]()
  {
    return 'Bus'
  }
}

module.exports = Bus
