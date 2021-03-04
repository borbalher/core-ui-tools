const
util                = require('util'),
dateformat          = require('dateformat'),
Core                = require('common/core'),
Locator             = require('common/core/locator'),
CoreObject          = require('common/core/object'),
Deepclone           = require('common/core/deepclone'),
Deepfreeze          = require('common/core/deepfreeze'),
Deepfind            = require('common/core/deepfind'),
Deepmerge           = require('common/core/deepmerge'),
DeepAssign          = require('common/core/deepassign'),
CoreString          = require('common/core/string'),
Configuration       = require('common/core/configuration'),
Metrics             = require('common/core/metrics'),
Timer               = require('common/core/timer'),
EventEmitterFactory = require('common/core/event-emitter/factory'),
consoleDefaults     = require('./console/defaults'),
ConsoleFactory      = require('./console/factory'),
Path                = require('./path')

class CoreFactory
{
  create(configurations)
  {
    const
    locator = this.createLocator(),
    core    = new Core({
      locator,
      configurations,
    })

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
    object              = new CoreObject(),
    path                = new Path(),
    deepassign          = new DeepAssign(deepclone),
    configuration       = new Configuration(deepclone, deepmerge, deepfind, deepfreeze),
    coreString          = new CoreString(),
    timer               = new Timer(),
    metrics             = new Metrics(timer),
    consoleFactory      = new ConsoleFactory(util, dateformat, console, consoleDefaults, coreString),
    eventEmitterFactory = new EventEmitterFactory(consoleFactory)

    locator.set('core/object', object)
    locator.set('core/path', path)
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
