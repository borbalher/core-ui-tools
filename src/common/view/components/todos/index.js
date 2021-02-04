
module.exports = ({ html, Component }) =>
{
  return class extends Component
  {
    constructor({ props })
    {
      super(props)
      this.props = props
      this.state = { todos: [{ text: 'a' }], text: '' }
    }

    setText(text)
    {
      console.log('Lets add a log here')
      this.setState({ text: text })
    }

    addTodo(event)
    {
      event.preventDefault()
      let { todos, text } = this.state
      todos = todos.concat({ text })
      this.setState({ todos, text: '' })
    }

    render()
    {
      return html`
        <form onSubmit=${(event) => { this.addTodo(event)}}>
            <input type="text" value=${this.state.text} onInput=${(event) => { this.setText(event.target.value)}}/>
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
}
