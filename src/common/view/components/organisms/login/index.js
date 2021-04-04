
module.exports = ({ html, useState, Form, TextInput, PasswordInput, Button, internationalization }) =>
{
  return (props) =>
  {
    const
    [username, setUsername] = useState(props.username),
    onUsernameChange        = ({ target: { value } }) =>
    {
      console.log(value)
      setUsername(value)
    },
    [password, setPassword] = useState(props.password),
    onPasswordChange        = ({ target: { value } }) =>
    {
      console.log(value)
      setPassword(value)
    },
    onSubmit = (event) =>
    {
      event.preventDefault()
      console.log(event)
    }

    return html`
    <${Form} onSubmit=${onSubmit}>
      <${TextInput}     name="username" required="true" value="${username}" onChange=${onUsernameChange}/>
      <${PasswordInput} name="password" required="true" value="${password}" onChange=${onPasswordChange}/>
      <${Button}        type="submit" text=${internationalization.translate({ id: 'LOGIN' })}/>
    </${Form}>`
  }
}
