const ListenerContractNotHoneredError = require('./error/listener-contract-not-honered')

class BusBootstrap
{
  constructor(locator, bus, channels)
  {
    this.locator  = locator
    this.bus      = bus
    this.channels = channels
  }

  addChannels(bus, channels)
  {
    for(const channel in channels)
    {
      bus.createChannel(channel)

      const listeners = channels[channel].listeners

      for(const event in listeners)
      {
        for(const listenerPath in listeners[event])
        {
          if(!listeners[event][listenerPath])
            continue

          const listener = this.locator.locate(listenerPath)

          if(typeof listener.execute !== 'function')
            throw new ListenerContractNotHoneredError(`"${listenerPath}" does not implement the Listener interface`)

          bus.on(channel, event, listener.execute.bind(listener))
        }
      }
    }
  }

  bootstrap()
  {
    this.addChannels(this.bus, this.channels)
  }
}

module.exports = BusBootstrap
