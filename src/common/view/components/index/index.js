
module.exports = ({ html, Component, ToDo, Clock, Counter }) =>
{
  return class extends Component
  {
    render()
    {
      return html`<${ToDo}/><${Clock}/><${Counter}/>`
    }
  }
}
