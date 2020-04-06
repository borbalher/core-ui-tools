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
    if(!channel)
      console.warn(`Channel "${id}" does not exist`)

    return channel
  }

  async emit(channelId, name, data)
  {
    return new Promise((resolve, reject) =>
    {
      console.log(channelId, name, data)

      const channel = this.getChannel(channelId)

      if(channel)
      {
        channel.emit(name, data)
          .then(() =>
          {
            resolve()
          })
          .catch((error) =>
          {
            reject(error)
          })
      }
      else
      {
        console.warn(`Channel ${channelId} not defined`)
      }
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
