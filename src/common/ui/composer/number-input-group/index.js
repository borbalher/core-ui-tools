const ComponentComposer = require('common/ui/composer/component')
/**
 * NumberInputGroup composer
 * @class
 */
class NumberInputGroupComposer extends ComponentComposer
{
  constructor(configuration, dictionary)
  {
    super(configuration)
    this.dictionary    = dictionary
  }

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
      return this.dictionary.translate('BETWEEN_MIN_MAX').replace(/##MIN##/gi, min).replace(/##MAX##/gi, max)
    else if(min)
      return this.dictionary.translate('BIGGER_OR_EQUAL').replace(/##MIN##/gi, min)
    else if(max)
      return this.dictionary.translate('LESSER_OR_EQUAL').replace(/##MAX##/gi, max)
  }

  getSet(acceptDecimals, acceptNegatives, maxDecimals)
  {
    if(!acceptDecimals && !acceptNegatives)
      return this.dictionary.translate('NATURAL_NUMBERS')
    else if(!acceptDecimals)
      return this.dictionary.translate('INTEGER_NUMBERS')
    else if(acceptDecimals && maxDecimals)
      return this.dictionary.translate('RATIONAL_NUMBERS_UP_TO_MAX_DECIMALS').replace(/##MAX_DECIMALS##/gi, maxDecimals)

    return this.dictionary.translate('RATIONAL_NUMBERS')
  }

  getFormatError(acceptDecimals, acceptNegatives, maxDecimals, min, max)
  {
    const
    range = this.getRange(min, max),
    set   = this.getSet(acceptDecimals, acceptNegatives, maxDecimals)

    if(range)
      return this.dictionary.translate('ONLY_SET_ALLOWED').replace(/##SET##/gi, `${set} ${range}`)

    return this.dictionary.translate('ONLY_SET_ALLOWED').replace(/##SET##/gi, set)
  }

  validate(required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label)
  {
    if(required && (!value || value.trim() === ''))
      return this.dictionary.translate('IS_REQUIRED').replace(/##LABEL##/gi, label)

    const regexp = this.getRegexp(acceptDecimals, maxDecimals, acceptNegatives)

    if(min && Number(value) < Number(min))
      return this.dictionary.translate('MINIMUN_VALUE_IS').replace(/##MIN##/gi, min)
    else if(max && Number(value) > Number(max))
      return this.dictionary.translate('MAXIMUM_VALUE_IS').replace(/##MAX##/gi, max)
    else if(!regexp.exec(value))
      return this.getFormatError(acceptDecimals, acceptNegatives, maxDecimals, min, max)
  }

  compose({
    acceptNegatives,
    acceptDecimals,
    renderonchange,
    maxDecimals,
    placeholder,
    attribute,
    disabled,
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
      template : 'number-input-group',
      schema   : 'entity/number-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label) : undefined,
      acceptNegatives,
      acceptDecimals,
      renderonchange,
      maxDecimals,
      placeholder,
      attribute,
      disabled,
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
