const Router = require('preact-router')

module.exports = ({ html, Component, ToDo, Clock, Counter }) =>
{
  return class extends Component
  {
    render({ url })
    {
      return html`
        <${Router} url=${url}>
          <${ToDo}    path="/to-dos"/>
          <${Clock}   path="/clock" />
          <${Counter} path="/counter" />
        </${Router}>`
    }
  }
}
