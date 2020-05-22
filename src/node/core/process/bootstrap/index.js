class ProcessBootstrap
{
  constructor(bus, eventComposer)
  {
    this.bus           = bus
    this.eventComposer = eventComposer
  }

  bootstrap()
  {
    process.on('unhandledRejection',  this.onError.bind(this))
    process.on('uncaughtException',   this.onError.bind(this))
  }

  onError(error, rejectedPromise)
  {
    if(rejectedPromise && rejectedPromise.domain)
    {
      process.domain.emit('error', error)
    }
    else if(process.domain)
    {
      process.domain.emit('error', error)
    }
    else
    {
      const appErrorEvent = this.eventComposer.compose('core.error', { error })
      this.bus.emit('app', appErrorEvent)
    }
  }
}

module.exports = ProcessBootstrap
