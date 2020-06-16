const ComponentComposer = require('common/ui/aggregate/component/composer')
/**
 * NumberInputGroup composer
 * @class
 */
class NumberInputGroupComposer extends ComponentComposer
{
  getRegexp(acceptDecimals, maxDecimals, acceptNegatives)
  {
    const
    negativeRegexp = this.getNegativeSignRegexp(acceptNegatives),
    decimalsRegexp = this.getDecimalsRegexp(acceptDecimals, maxDecimals),
    regexpStr      = `^${negativeRegexp}\\d+${decimalsRegexp}$`
    return new RegExp(regexpStr)
  }

  getDecimalsRegexp(acceptDecimals, maxDecimals)
  {
    if(acceptDecimals)
      return `(\\.\\d{0,${maxDecimals ? maxDecimals : ''}})?`

    return ''
  }

  getNegativeSignRegexp(acceptNegatives)
  {
    if(acceptNegatives)
      return '-?'

    return ''
  }

  getRange(min, max)
  {
    if(min && max)
      return ` between ${min} and ${max} `
    else if(min)
      return ` bigger or equal than ${min} `
    else if(max)
      return ` lesser or equal than ${max} `
    else
      return ' '
  }

  getSet(acceptDecimals, acceptNegatives, maxDecimals)
  {
    if(!acceptDecimals && !acceptNegatives)
      return `natural numbers`
    else if(!acceptDecimals)
      return `integer numbers`
    else if(acceptDecimals && maxDecimals)
      return `rational numbers up to ${maxDecimals} decimals`
    else if(acceptDecimals)
      return `rational numbers`
  }

  getFormatError(acceptDecimals, acceptNegatives, maxDecimals, min, max)
  {
    const
    range = this.getRange(min, max),
    set   = this.getSet(acceptDecimals, acceptNegatives, maxDecimals)

    if(!acceptDecimals && !acceptNegatives)
      return `Only ${set}${range}are allowed`
    else if(!acceptDecimals)
      return `Only ${set}${range}are allowed`
    else if(acceptDecimals && maxDecimals)
      return `Only ${set}${range}are allowed`
    else if(acceptDecimals)
      return `Only ${set}${range}are allowed`
  }

  validate(required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label)
  {
    if(required && (!value || value.trim() === ''))
      return `${label} is required`

    const regexp = this.getRegexp(acceptDecimals, maxDecimals, acceptNegatives)

    if(min && Number(value) < Number(min))
      return `Minimum value is ${min}`
    else if(max && Number(value) > Number(max))
      return `Maximum value is ${max}`
    else if(!regexp.exec(value))
      return this.getFormatError(acceptDecimals, acceptNegatives, maxDecimals, min, max)
  }

  compose({
    bindings  = [],
    listeners = [],
    acceptNegatives,
    acceptDecimals,
    renderonchange,
    maxDecimals,
    placeholder,
    attribute,
    disabled,
    optional,
    parentId,
    readonly,
    required,
    classes,
    options,
    label,
    title,
    value,
    name,
    step,
    unit,
    big,
    max,
    min,
    id
  })
  {
    const
    numberInputGroup = super.compose({
      template  : 'number-input-group',
      schema    : 'entity/number-input-group',
      bindings  : [ ...this.bindings, ...bindings ],
      listeners : [ ...this.listeners, ...listeners ],
      error     : process.env.PLATFORM === 'browser' ? this.validate(required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label) : undefined,
      acceptNegatives,
      acceptDecimals,
      renderonchange,
      maxDecimals,
      placeholder,
      attribute,
      disabled,
      optional,
      parentId,
      readonly,
      required,
      classes,
      options,
      label,
      title,
      value,
      name,
      step,
      unit,
      big,
      max,
      min,
      id
    })

    return numberInputGroup
  }
}

module.exports = NumberInputGroupComposer
