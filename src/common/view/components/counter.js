const { html, Component } = require('htm/preact')

class Counter extends Component
{
  constructor(props)
  {
    super(props)
    this.props = props
    this.state = { todos: [{ text: 'a' }], text: '' }
  }

  setText(event)
  {
    this.setState({ text: event.target.value })
  }

  addTodo()
  {
    let { todos, text } = this.state
    todos = todos.concat({ text })
    this.setState({ todos, text: '' })
  }

  render()
  {
    return html`
      <form onSubmit=${this.addTodo}>
          <input type="text" value=${this.state.text} onInput=${this.setText}/>
          <button type="submit">Add</button>
          <ul>
              ${this.state.todos.map((todo) =>
              {
                return html`<li>${todo.text}</li>`
              })}
          </ul>
      </form>`
  }
}


module.exports = Counter
