const Button = ({ html }) =>
{
  return ({
    classes,
    onClick,
    text,
    disabled,
    type
  }) =>
  {
    return html`<button type=${type} disabled=${disabled} class=${classes} onClick=${onClick}>
      ${text}
    </button>`
  }
}

module.exports = Button

