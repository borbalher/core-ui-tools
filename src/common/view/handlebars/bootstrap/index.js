// const fs = require('fs')

class CoreHandlebarsBootstrap
{
  constructor(locator)
  {
    this.locator = locator
  }

  bootstrap()
  {
    const
    handlebars    = this.locator.locate('core/handlebars'),
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.handlebars')

    if(options.helpers)
    {
      if(typeof options.helpers !== 'object')
        throw new TypeError(`Invalid format for "config.handlebars.helpers". Expected "object" or "Array", found:"${typeof options.helpers}"`)

      for(const name in options.helpers)
      {
        const service = options.helpers[name]

        let helper

        switch(typeof service)
        {
        case 'boolean':
        {
          if(service)
            throw new TypeError(`boolean value "true" is not a valid option for a handlebars helper, absolute path is required.`)
          else
            continue
        }
        case 'string':
        {
          const helperFactory = this.locator.locate(service)

          if(typeof helperFactory.create !== 'function')
            throw new TypeError(`Invalid helper factory, contract not honered. Expected "create" function is undefined.`)

          helper = helperFactory.create()
          break
        }
        default:
        {
          throw new TypeError(`Invalid service. Expected "string" or "boolean". Found: ${typeof service}`)
        }
        }

        handlebars.handlebars.registerHelper(name, helper)
      }
    }
  }
}

module.exports = CoreHandlebarsBootstrap
