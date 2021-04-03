const TextInput = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getErrorMessage = ({ required, pattern, value, title, label }) =>
  {
    if(required && (!value || value.trim() === ''))
    {
      return internationalization.translate({ id: 'IS_REQUIRED' , fields: { label } })
    }
    else if(value && pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
        return title ? title : internationalization.translate({ id: 'INVALID_FORMAT' })
    }
  }

  return (props) =>
  {
    const
    {
      autocomplete,
      big,
      classes,
      disabled,
      id,
      label,
      maxlength,
      minlength,
      name,
      pattern,
      placeholder,
      readonly,
      required,
      template,
      title,
      value    = '',
      onChange = () => {}
    }                 = props,
    [data, setData]   = useState(value),
    [error, setError] = useState(getErrorMessage({ required, value, pattern, title, label }))


    useEffect(() =>
    {
      const errorMessage = getErrorMessage({ required, value, pattern, title, label })
      setData(value)
      setError(errorMessage)
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
        autoComplete=${autocomplete ? 'on' : 'off'}
        class=${'input-group__input'}
        disabled=${disabled}
        id=${id}
        maxLength=${maxlength}
        minLength=${minlength}
        name=${name}
        pattern=${pattern}
        placeholder=${internationalization.translate({ id: placeholder })}
        readOnly=${readonly}
        required=${required}
        title=${internationalization.translate({ id: title })}
        type='text'
        value=${data}
        onChange=${onChange}
      />
    </${InputGroup}>`
  }
}

module.exports = TextInput

