const CheckboxInput = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getErrorMessage = ({ required, checked, label}) =>
  {
    if(required && !checked)
    {
      return internationalization.translate({ id: 'IS_REQUIRED' , fields: { label } })
    }
  }

  return (props) =>
  {
    const
    {
      big,
      classes,
      disabled,
      id,
      label,
      name,
      readonly,
      required,
      template,
      checked  = false,
      onChange = ({ target : { checked } = {} } = {}) => {
        setData(checked)
        setError(getErrorMessage({ required, checked, label }))
      }
    }                 = props,
    [data, setData]   = useState(checked),
    [error, setError] = useState(getErrorMessage({ required, checked, label }))

    useEffect(() =>
    {
      setData(checked)
      setError(getErrorMessage({ required, checked, label }))
    }, [checked])

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
      <label for=${id} class=${'checkbox'}>
        ${label}
        <input
          id=${id}
          class=${`checkbox__input`}
          name=${name}
          checked=${data}
          required=${required}
          readonly=${readonly}
          disabled=${disabled}
          onChange=${onChange}
          type='checkbox' />
        <span class='checkbox__checkmark'></span>
      </label>
    </${InputGroup}>`
  }
}

module.exports = CheckboxInput

