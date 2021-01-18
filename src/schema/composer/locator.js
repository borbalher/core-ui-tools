const
Composer                            = require('.'),
InvalidSchemaError                  = require('./error/invalid-schema'),
FilterIsNotHonoringContractError    = require('./error/filter-is-not-honoring-contract'),
ValidatorIsNotHonoringContractError = require('./error/validator-is-not-honoring-contract')

class ComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  getSchemas(schemas)
  {
    const map = new Map()

    Object.entries(schemas)
      .forEach(([ type, service ]) =>
      {
        const instance = this.locator.locate(service)

        if(typeof instance !== 'object')
          throw new InvalidSchemaError(`Schema "${type}" must be an object`)

        map.set(type, instance)
      })

    return map
  }

  getValidators(validators)
  {
    const map = new Map()

    Object.entries(validators)
      .forEach(([ type, service ]) =>
      {
        const instance = this.locator.locate(service)

        if(typeof instance.valid !== 'function')
          throw new ValidatorIsNotHonoringContractError(`Validator "${type}" not honoring contract`)

        map.set(type, instance)
      })

    return map
  }

  getFilters(filters)
  {
    const map = new Map()

    Object.entries(filters)
      .forEach(([ type, service ]) =>
      {
        const instance = this.locator.locate(service)

        if(typeof instance.filter !== 'function')
          throw new FilterIsNotHonoringContractError(`Filter "${type}" not honoring contract`)

        map.set(type, instance)
      })

    return map
  }

  locate()
  {
    const
    configuration                                = this.locator.locate('core/configuration'),
    { schema = {}, filter = {}, validator = {} } = configuration.find('schema')

    return new Composer({
      deepclone  : this.locator.locate('core/deepmerge'),
      deepfreeze : this.locator.locate('core/deepclone'),
      deepmerge  : this.locator.locate('core/deepfreeze'),
      filters    : this.getFilters(filter),
      schemas    : this.getSchemas(schema),
      validators : this.getValidators(validator)
    })
  }
}

module.exports = ComposerLocator
