const Form = ({ html }) =>
{
  return (props) =>
  {
    const
    {
      id,
      children,
      onSubmit = () => {},
      onChange = () => {},
      onReset  = () => {},
      onBlur   = () => {}
    } = props

    return html`
      <form
        id=${id}
        onSubmit=${onSubmit}
        onBlur=${onBlur}
        onChange=${onChange}
        onReset=${onReset}>
        ${children}
      </form>`
  }
}

module.exports = Form

