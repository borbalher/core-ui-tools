const RadioInput = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getErrorMessage = ({ required, value, label }) =>
  {
    if(required && !value)
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
      buttons,
      template,
      value    = '',
      onChange = ({ target : { value } = {} } = {}) => {
        setData(value)
        setError(getErrorMessage({ required, value, label }))
      }
    }                 = props,
    [data, setData]   = useState(value),
    [error, setError] = useState(getErrorMessage({ required, value, label }))

    useEffect(() =>
    {
      setData(value)
      setError(getErrorMessage({ required, value, label }))
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
      <div className='btn-group__buttons'>
        ${buttons.map((button, index) =>
        {
          return html`<div key=${index} class='btn-group__button-container'>
                  <input
                    type='radio'
                    id=${button}
                    value=${button}
                    checked=${data === button}
                    name=${name}
                    disabled=${disabled}
                    readOnly=${readonly}
                    required=${required}
                    onChange=${onChange}/>

                  <label className='btn-group__button' for=${button}>
                    ${internationalization.translate({ id: button })}
                  </label>
                </div>`
        })}
      </div>

    </${InputGroup}>`
  }
}

module.exports = RadioInput

