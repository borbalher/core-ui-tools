const Button = ({ html }) =>
{
  return ({
    classes,
    onClick,
    value,
    disabled
  }) =>
  {
    return html`<input type="button" disabled=${disabled} class=${classes} value=${value} onClick=${onClick}/>`
  }
}

module.exports = Button

