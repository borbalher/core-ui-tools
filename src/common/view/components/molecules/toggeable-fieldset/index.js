const ToggeableFieldset = ({ html, useState, CheckboxInputGroup, Fieldset, useEffect }) =>
{
  const getIsVisible = ({
    checked,
    showWhenChecked
  }) =>
  {
    return (!checked && !showWhenChecked) ||
           (checked && showWhenChecked)
  }

  return (props) =>
  {
    const
    {
      children,
      label,
      form,
      legend,
      showWhenChecked = true,
      checked = false,
    } = props,
    [isVisible, setIsVisible] = useState({ checked, showWhenChecked }),
    [isChecked, setIsChecked] = useState(checked),
    onChange = ({ target : { checked } = {}} = {}) =>
    {
      setIsChecked(checked)
      setIsVisible(getIsVisible({ checked, showWhenChecked }))
    }

    return html`
      <${CheckboxInputGroup}
        checked=${isChecked}
        class='toggeable-fieldset__checkbox'
        label=${label}
        onChange=${onChange}
      />

      <${Fieldset}
        classes=${isVisible ? '--visible' : '--hidden' }
        form=${form}
        legend=${legend}
        disabled=${!isVisible}>
        ${children}
      </${Fieldset}>`
  }
}

module.exports = ToggeableFieldset

