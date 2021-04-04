const NumberInput = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getDecimalsRegexp = ({ acceptDecimals, maxDecimals }) =>
  {
    if(acceptDecimals)
      return `(\\.\\d{0,${maxDecimals ? maxDecimals : ''}})?`

    return ''
  },
  getNegativeSignRegexp = ({ acceptNegatives }) =>
  {
    return acceptNegatives ? '-?' : ''
  },
  getRegexp = ({ acceptDecimals, maxDecimals, acceptNegatives }) =>
  {
    const
    negativeRegexp = getNegativeSignRegexp({ acceptNegatives }),
    decimalsRegexp = getDecimalsRegexp({ acceptDecimals, maxDecimals }),
    regexpStr      = `^${negativeRegexp}\\d+${decimalsRegexp}$`
    return new RegExp(regexpStr)
  },
  getRange = ({ min, max }) =>
  {
    if(min && max)
      return internationalization.translate({ id: 'BETWEEN_MIN_MAX' , fields: { min, max } })
    else if(min)
      return internationalization.translate({ id: 'BIGGER_OR_EQUAL' , fields: { min } })
    else if(max)
      return internationalization.translate({ id: 'LESSER_OR_EQUAL' , fields: { max } })
  },
  getSet = ({ acceptDecimals, acceptNegatives, maxDecimals }) =>
  {
    if(!acceptDecimals && !acceptNegatives)
      return internationalization.translate({ id: 'NATURAL_NUMBERS' })
    else if(!acceptDecimals)
      return internationalization.translate({ id: 'INTEGER_NUMBERS' })
    else if(acceptDecimals && maxDecimals)
      return internationalization.translate({ id: 'RATIONAL_NUMBERS_UP_TO_MAX_DECIMALS' , fields: { maxDecimals } })

      return internationalization.translate({ id: 'RATIONAL_NUMBERS' })
  },
  getFormatError = ({ acceptDecimals, acceptNegatives, maxDecimals, min, max }) =>
  {
    const
    range = getRange({ min, max }),
    set   = getSet({ acceptDecimals, acceptNegatives, maxDecimals })

    if(range)
      return internationalization.translate({ id: 'ONLY_SET_ALLOWED' , fields: { set, range } })

    return internationalization.translate({ id: 'ONLY_SET_ALLOWED' , fields: { set } })
  },
  getErrorMessage = ({ required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label }) =>
  {
    if(required && (!value || value.trim() === ''))
      return internationalization.translate({ id: 'IS_REQUIRED' , fields: { label } })

    if(value)
    {
      const regexp = getRegexp({ acceptDecimals, maxDecimals, acceptNegatives })

      if(min && Number(value) < Number(min))
        return internationalization.translate({ id: 'MINIMUN_VALUE_IS' , fields: { min } })
      else if(max && Number(value) > Number(max))
        return internationalization.translate({ id: 'MAXIMUM_VALUE_IS' , fields: { max } })
      else if(!regexp.exec(value))
        return getFormatError({ acceptDecimals, acceptNegatives, maxDecimals, min, max })
    }
  }

  return (props) =>
  {
    const
    {
      acceptDecimals,
      acceptNegatives,
      maxDecimals,
      autocomplete,
      big,
      classes,
      disabled,
      id,
      label,
      max,
      min,
      name,
      pattern,
      placeholder,
      readonly,
      required,
      template,
      title,
      value    = '',
      onChange = ({ target : { value } = {} } = {}) => {
        setData(value)
        setError(getErrorMessage({ required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label }))
      }
    }                 = props,
    [data, setData]   = useState(value),
    [error, setError] = useState(getErrorMessage({ required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label  }))

    useEffect(() =>
    {
      setData(value)
      setError(getErrorMessage({ required, value, acceptDecimals, acceptNegatives, maxDecimals, min, max, label }))
    }, [value])

    return html`
    <${InputGroup}
      big=${big}
      class=${classes}
      error=${error}
      id=${id}
      label=${label}
      required=${required}
      template=${template}
    >
      <input
        autocomplete=${autocomplete ? 'on' : 'off'}
        class=${'input-group__input'}
        disabled=${disabled}
        id=${id}
        max=${max}
        min=${min}
        name=${name}
        onChange=${onChange}
        pattern=${pattern}
        placeholder=${internationalization.translate({ id: placeholder })}
        readOnly=${readonly}
        required=${required}
        title=${internationalization.translate({ id: title })}
        type='number'
        value=${data}
      />
    </${InputGroup}>`
  }
}

module.exports = NumberInput

