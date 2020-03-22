class ProcessBootstrap
{
  constructor(bus)
  {
    this.bus = bus
  }

  bootstrap()
  {
    process.on('unhandledRejection',  this.onError.bind(this))
    process.on('uncaughtException',   this.onError.bind(this))
  }

  onError(error, rejectedPromise)
  {
    if(rejectedPromise && rejectedPromise.domain)
      rejectedPromise.domain.emit('error', error)
    else if(process.domain)
      process.domain.emit('error', error)
    else
      this.bus.emit('app', 'core.error', error)
  }
}

module.exports = ProcessBootstrap
