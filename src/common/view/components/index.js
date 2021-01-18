const
{ html, Component } = require('htm/preact'),
Clock               = require('common/view/components/clock'),
Counter             = require('common/view/components/counter')

class Index extends Component
{
  render()
  {
    return html`<${Clock}/><${Counter}/>`
  }
}

module.exports = Index
