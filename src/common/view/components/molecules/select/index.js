const Select = ({ html, internationalization, useState, InputGroup, useEffect }) =>
{
  const
  getErrorMessage = ({ required, selected }) =>
  {
    if(required && (!selected || selected.length === 0))
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
      size = 1,
      multiple = false,
      name,
      required,
      template,
      options  = [],
      selected = [],
      onChange = ({ target } = {}) => {
        const selectedOptions = [...target.selectedOptions].map((option) => option.value)
        setData(selectedOptions)
        setError(getErrorMessage({ required, selected, label }))
      }
    }                 = props,
    [data, setData]   = useState(selected),
    [error, setError] = useState(getErrorMessage({ required, selected, label }))

    useEffect(() =>
    {
      setData(selected)
      setError(getErrorMessage({ required, selected, label }))
    }, [selected])

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
      <select
        class=${'input-group__input'}
        id=${id}
        name=${name}
        required=${required}
        disabled=${disabled}
        autocomplete=${autocomplete ? 'on' : 'off'}
        size=${size}
        multiple=${multiple}
        onChange=${onChange}>
        ${options.map((option) =>
          {
            return html`<option selected=${data.indexOf(option) !== -1}value=${option}>${internationalization.translate({ id: option })}</option>`
          })}
      </select>
    </${InputGroup}>`
  }
}

module.exports = Select

