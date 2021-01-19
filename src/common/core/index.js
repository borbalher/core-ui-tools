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

    // extending the configurations of every component
    for(const component in this.components)
    {
      const
      pathname = this.components[component] ? this.components[component] : component,
      config   = await this.configFetcher.fetchComponentConfig(component, pathname)
      configuration.extend(config)
    }


    configuration.freeze()

    const
    serviceMap    = configuration.find('core.locator'),
    serviceNames  = serviceMap ? Object.keys(serviceMap) : []

    await this.serviceLoader.loadServiceRecursion(serviceNames)
  }

  locate(service)
  {
    return this.locator.locate(service)
  }
}

module.exports = Core
