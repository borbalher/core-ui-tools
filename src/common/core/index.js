const
ServiceUnableToResolveDependenciesError = require('./error/service-unable-to-resolve-dependencies')

class Core
{
  constructor({
    locator,
    configurations = []
  })
  {
    this.locator = locator

    this.load(configurations)
  }

  load(configurations)
  {
    const configuration = this.locate('core/configuration')

    // extending the configurations of every component
    for(const [name, config] of Object.entries(configurations))
      configuration.extend(config)

    configuration.freeze()

    const
    services = configuration.find('core.locator') || {},
    map      = new Map()

    for(const [name, locator] of Object.entries(services))
      map.set(name, locator)

    this.addServicesToLocator(map)
  }

  /**
   * Eager loading the services in the sevice locator.
   * Recursion queue to complete loading all services.
   * @param {Map<Locator>} services  services
   */
  addServicesToLocator(services)
  {
    // when the queu is empty, then we are done
    if(services.size === 0)
      return

    // incomplete services that could not be loaded in the declared order
    const queue = new Map()

    services
      .forEach((Locator, service) =>
      {
        try
        {
          const locator = new Locator(this.locator)
          this.locator.set(service, locator.locate())
        }
        catch(error)
        {
          queue.set(service, Locator)
        }
      })

    // if the new queue is the same as the old queue, then no progress has taken place
    if(services.size === queue.size)
      throw new ServiceUnableToResolveDependenciesError(`Unmet dependencies found, could not resolve dependencies for ${Array.from(queue.keys()).join(', ')}`)

    // recursion until the queue is empty
    this.addServicesToLocator(queue)
  }

  locate(service)
  {
    return this.locator.locate(service)
  }
}

module.exports = Core
