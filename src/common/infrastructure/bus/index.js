const AssociativeArray = require('../../core/data-structure/associative-array')

class Bus
{
  constructor(channelFactory)
  {
    this.channelFactory  = channelFactory
    this.channels        = new AssociativeArray()
  }

  createChannel(id)
  {
    const channel = this.channelFactory.create(id)
    this.channels.setItem(id, channel)
    return channel
  }

  deleteChannel(id)
  {
    this.channels.removeItem(id)
  }

  getChannel(id)
  {
    return this.channels.getItem(id)
  }

  async emit(channelId, name, data)
  {
    const channel = this.getChannel(channelId)
    await channel.emit(name, data)
  }

  on(channelId, event, listener)
  {
    const channel = this.getChannel(channelId)
    if(channel)
      return channel.on(event, listener)
    else
      console.warn(`Channel ${channelId} error`)
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
