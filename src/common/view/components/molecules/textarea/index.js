const Textarea = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getErrorMessage = ({ required, value, label }) =>
  {
    if(required && (!value || value.trim() === ''))
    {
      return internationalization.translate({ id: 'IS_REQUIRED' , fields: { label } })
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
      name,
      pattern,
      placeholder,
      readonly,
      required,
      template,
      title,
      rows,
      columns,
      value    = '',
      onChange = ({ target : { value } = {} } = {}) => {
        setData(value)
        setError(getErrorMessage({ required, value, pattern, title, label }))
      }
    }                 = props,
    [data, setData]   = useState(value),
    [error, setError] = useState(getErrorMessage({ required, value, pattern, title, label }))

    useEffect(() =>
    {
      setData(value)
      setError(getErrorMessage({ required, value, pattern, title, label }))
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
        <textarea
          class=${'input-group__input'}
          id=${id}
          rows=${rows}
          columns=${columns}
          name=${name}
          value=${data}
          required=${required}
          disabled=${disabled}
          readOnly=${readonly}
          maxLength=${maxlength}
          placeholder=${internationalization.translate({ id: placeholder })}
          title=${internationalization.translate({ id: title })}
          autoComplete=${autocomplete ? 'on' : 'off'}
          onChange=${onChange}
        />
      </${InputGroup}>`
  }
}

module.exports = Textarea

