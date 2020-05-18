const
dateformat          = require('dateformat'),
Core                = require('core-ui-tools/common/core'),
ConfigFetcher       = require('core-ui-tools/browser/core/config-fetcher'),
consoleDefaults     = require('core-ui-tools/browser/core/console/defaults'),
ConsoleFactory      = require('core-ui-tools/browser/core/console/factory'),
ServiceLoader       = require('core-ui-tools/browser/core/service-loader'),
Locator             = require('core-ui-tools/common/core/locator'),
Deepclone           = require('core-ui-tools/common/core/deepclone'),
Deepfreeze          = require('core-ui-tools/common/core/deepfreeze'),
Deepfind            = require('core-ui-tools/common/core/deepfind'),
Deepmerge           = require('core-ui-tools/common/core/deepmerge'),
DeepAssign          = require('core-ui-tools/common/core/deepassign'),
CoreString          = require('core-ui-tools/common/core/string'),
Configuration       = require('core-ui-tools/common/core/configuration'),
Metrics             = require('core-ui-tools/common/core/metrics'),
Timer               = require('core-ui-tools/common/core/timer'),
EventEmitterFactory = require('core-ui-tools/common/core/event-emitter/factory')

class CoreFactory
{
  create(components)
  {
    const
    locator       = this.createLocator(),
    configFetcher = new ConfigFetcher(locator),
    serviceLoader = new ServiceLoader(locator),
    core          = new Core(locator, configFetcher, serviceLoader)

    for(const component of components)
      core.add(component.name, component.path)

    return core
  }

  createLocator()
  {
    const
    locator             = new Locator(),
    deepclone           = new Deepclone(),
    deepfreeze          = new Deepfreeze(),
    deepmerge           = new Deepmerge(),
    deepfind            = new Deepfind(),
    deepassign          = new DeepAssign(deepclone),
    configuration       = new Configuration(deepclone, deepmerge, deepfind, deepfreeze),
    timer               = new Timer(),
    metrics             = new Metrics(timer),
    coreString          = new CoreString(),
    consoleFactory      = new ConsoleFactory(dateformat, console, consoleDefaults, coreString),
    eventEmitterFactory = new EventEmitterFactory(consoleFactory)

    locator.set('core/timer', timer)
    locator.set('core/string', coreString)
    locator.set('core/deepclone', deepclone)
    locator.set('core/metrics', metrics)
    locator.set('core/console/factory', consoleFactory)
    locator.set('core/event-emitter/factory', eventEmitterFactory)
    locator.set('core/deepfreeze', deepfreeze)
    locator.set('core/deepmerge', deepmerge)
    locator.set('core/deepfind', deepfind)
    locator.set('core/deepassign', deepassign)
    locator.set('core/configuration', configuration)

    return locator
  }
}

module.exports = CoreFactory
