const InputGroup = ({ html, internationalization, Label }) =>
{
  return ({
    big,
    children,
    classes,
    error,
    id,
    label,
    required,
  }) =>
  {
    return html`
      <div class=${
        `input-group
        ${big     ? 'input-group--xl' : ''}
        ${error   ? '--error'         : ''}
        ${classes ? classes           : ''}`}>

      ${children}

      <div class='input-group__label-wrapper'>

        ${label && html`<${Label} classes="input-group__label" labelFor=${id} text=${label}/>`}

        ${!required && html`<span  class='input-group__optional-label'>
          ${internationalization.translate({
            id : 'OPTIONAL'
          })}
        </span>`}
      </div>

      <div class=${`input-group__error ${error ? '--visible' : '--hidden'}`}>
        ${internationalization.translate({ id: error })}
      </div>
    </div>`
  }
}

module.exports = InputGroup

