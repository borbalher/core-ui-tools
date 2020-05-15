class Core
{
  constructor(locator, configFetcher, serviceLoader)
  {
    this.locator           = locator
    this.configFetcher     = configFetcher
    this.serviceLoader     = serviceLoader
    this.components        = {}
  }

  add(component, pathname)
  {
    this.components[component] = pathname
  }

  async load()
  {
    const configuration = this.locate('core/configuration')

    try
    {
      // extending the configurations of every component
      for(const component in this.components)
      {
        const
        pathname = this.components[component] ? this.components[component] : component,
        config   = await this.configFetcher.fetchComponentConfig(component, pathname)
        configuration.extend(config)
      }
    }
    catch(error)
    {
      console.log(error)
    }


    configuration.freeze()

    const
    serviceMap    = configuration.find('core.locator'),
    serviceNames  = serviceMap ? Object.keys(serviceMap) : []

    try
    {
      await this.serviceLoader.loadServiceRecursion(serviceNames)
    }
    catch(error)
    {
      console.log(error)
    }
    // eager loading the services in the sevice locator
  }

  locate(service)
  {
    return this.locator.locate(service)
  }
}

module.exports = Core
