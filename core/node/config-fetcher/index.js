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
      // TODO define order and preference
      const
      path          = this.locator.locate('core/path'),
      specifiedPath = `${pathname}/config`,
      localPath     = `${path.main.dirname}/${component}/config`

      if(path.isResolvable(specifiedPath))
        resolve(require(specifiedPath))
      else if(path.isResolvable(localPath))
        resolve(require(localPath))
      else
        reject(new ComponentNotResolvableError(`could not resolve path to component "${component}"`))
    })
  }
}

module.exports = NodeConfigFetcher
