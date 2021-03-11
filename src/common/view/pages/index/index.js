module.exports = ({ html, ToDo, Router}) =>
{
  return ({ url }) =>
  {
    return html`
    <${Router} url=${url}>
      <${ToDo}    path="/to-dos"/>
    </${Router}>`
  }
}
