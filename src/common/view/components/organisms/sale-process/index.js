
module.exports = ({ html, useState, Form, TextInput, PasswordInput, Button, internationalization }) =>
{
  return (props) =>
  {
    const
    [name, setName] = useState(props.name),
    onNameChange    = ({ target: { value } }) =>
    {
      setName(value)
    },
    [phone, setPhone] = useState(props.phone),
    onPhoneChange        = ({ target: { value } }) =>
    {
      setPhone(value)
    },
    onSubmit = (event) =>
    {
      event.preventDefault()
    }

    return html`
    <${Form} onSubmit=${onSubmit}>
      <${TextInput}     name="name"  required="true" value="${name}"  onChange=${onNameChange}/>
      <${PasswordInput} name="phone" required="true" value="${phone}" onChange=${onPhoneChange}/>
      <${Button}        type="button" text=${internationalization.translate({ id: 'CREATE_SALE_PROCESS' })}/>
    </${Form}>`
  }
}
