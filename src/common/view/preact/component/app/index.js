const { html, Component } = require('htm/preact')

class App extends Component
{
  render(props)
  {
    return html`
      <div class="app">
        <h1>This is ${props.name}</h1>
        <p>Current server time: ${new Date() + ''}</p>
      </div>
    `
  }
}

module.exports = App
