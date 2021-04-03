const Label = ({ html, internationalization }) =>
{
  return ({
    classes,
    labelFor,
    text
  }) =>
  {
    return html`<label class=${classes} for=${labelFor}>${internationalization.translate({ id : text })}</label>`
  }
}

module.exports = Label

