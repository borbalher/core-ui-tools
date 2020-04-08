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
      projectPath     = `${path.main.baseDir}/${pathname}/config`,
      nodeModulesPath = `${pathname}/config`

      if(path.isResolvable(projectPath))
        resolve(require(projectPath))
      else if(path.isResolvable(nodeModulesPath))
        resolve(require(nodeModulesPath))
      else
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
    })
  }
}

module.exports = NodeConfigFetcher
