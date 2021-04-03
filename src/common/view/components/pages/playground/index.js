
module.exports = ({ html, TextInput, useState }) =>
{
  return (props) =>
  {
    const
    [username, setUsername] = useState(props.username),
    onChange                = ({ target: { value } }) =>
    {
      console.log(value)
      setUsername(value)
    }

    return html`<${TextInput} onChange=${onChange} required="true" value="${username}"/>`
  }
}
