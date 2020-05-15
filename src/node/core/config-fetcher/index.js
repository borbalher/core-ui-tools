const ComponentNotResolvableError = require('./error/component-not-resolvable')

/**
 * @implements {core/config-fetcher}
 */
class NodeConfigFetcher
{
  constructor(locator)
  {
    this.locator = locator
  }
  async fetchComponentConfig(component, pathname)
  {
    return new Promise(async (resolve, reject) =>
    {
      const
      path            = this.locator.locate('core/path'),
      dirnamePath     = `${path.main.dirname}/${pathname}/config`,
      nodeModulesPath = `${pathname}/config`

      if(path.isResolvable(nodeModulesPath))
        resolve(require(nodeModulesPath))
      else if(path.isResolvable(dirnamePath))
        resolve(require(dirnamePath))
      else
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
    })
  }
}

module.exports = NodeConfigFetcher
