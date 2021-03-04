module.exports =  ({ html, BrowserRouter }) =>
{
  const App = (props) =>
  {
    return html`
    <${BrowserRouter}>
      <${Component} ...${props}/>
    </${BrowserRouter}>`
  }

  return App
}