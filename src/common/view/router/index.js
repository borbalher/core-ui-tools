module.exports =  ({ App, html, Router }) =>
{
  return ({ url }) =>
  {
    return html`
    <${Router} url=${url}>
      <${App} path="/" />
    </${Router}>`
  }
}