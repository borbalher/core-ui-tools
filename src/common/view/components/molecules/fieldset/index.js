const Fieldset = ({ html, internationalization }) =>
{
  return (props) =>
  {
    const
    {
      id,
      children,
      name,
      form,
      disabled,
      classes,
      legend
    } = props

    return html`
      <fieldset
        id=${id}
        form=${form}
        name=${name}
        class=${classes}
        disabled=${disabled}>

      ${legend && html`<legend><span>${internationalization.translate({ id: legend })}</span></legend>`}
      ${children}

      </fieldset>`
  }
}

module.exports = Fieldset

