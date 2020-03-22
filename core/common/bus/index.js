const
AssociativeArray      = require('../data-structure/associative-array'),
ChannelNotExistsError = require('./error/channel-not-exists')

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
    const channel = this.channels.getItem(id)
    // if(!channel)
    //   throw new ChannelNotExistsError(`Channel "${id}" does not exist`)

    return channel
  }

  async emit(channelId, name, data)
  {
    return new Promise((resolve, reject) =>
    {
      this.getChannel(channelId)
        .emit(name, data)
        .then(() =>
        {
          resolve()
        })
        .catch((error) =>
        {
          reject(error)
        })
    })
  }

  on(channelId, event, listener)
  {
    return this.getChannel(channelId)
      .on(event, listener)
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
    this.getChannel(channelId).removeAllListeners(event)
  }

  clear(channelId)
  {
    this.getChannel(channelId).clear()
  }

  get [Symbol.toStringTag]()
  {
    return 'Bus'
  }
}

module.exports = Bus
