
module.exports = ({ Login, Form, RadioInput, html, TextInput, useState, PasswordInput, NumberInput, CheckboxInput, Select, Textarea, ToggeableFieldset }) =>
{
  return (props) =>
  {
    return html`<${Login}/>`
    // const
    // [username, setUsername] = useState(props.username),
    // onUsernameChange        = ({ target: { value } }) =>
    // {
    //   console.log(value)
    //   setUsername(value)
    // },
    // [password, setPassword] = useState(props.password),
    // onPasswordChange        = ({ target: { value } }) =>
    // {
    //   console.log(value)
    //   setPassword(value)
    // },
    // [accept, setAccept] = useState(props.accept),
    // onAcceptChange      = ({ target: { checked } }) =>
    // {
    //   console.log(checked)
    //   setAccept(checked)
    // },
    // options  = ['A', 'B', 'C'],
    // selected = ['C'],
    // onSubmit = (event) =>
    // {
    //   event.preventDefault()
    //   console.log(event)
    // }

    // return html`
    //   <${Form} onSubmit=${onSubmit}>
    //     <${RadioInput} buttons=${options}/>
    //     <${ToggeableFieldset}>
    //       <${Select} options=${options} selected=${selected}/>
    //       <${CheckboxInput} onChange=${onAcceptChange} checked=${accept} required="true"/>
    //       <${NumberInput} min="0" max="1" step="0.1" maxDecimals="2" acceptDecimals="true" acceptNegatives="false"/>
    //       <${TextInput} required="true" value="${username}"/>
    //       <${Textarea} rows="10" />
    //       <${PasswordInput} value="${password}" required="true" />
    //     </${ToggeableFieldset}>
    //     <input type="submit" />
    //   </${Form}>
    // `
    // return html`<${TextInput} onChange=${onUsernameChange} required="true" value="${username}"/> <${PasswordInput} onChange=${onPasswordChange} value="${password}" required="true" />`
  }
}
