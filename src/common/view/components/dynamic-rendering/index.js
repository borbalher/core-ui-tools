
module.exports = ({ html, useState, DynamicRendering}) =>
{
  return ({ isBot }) =>
  {
    const [numbers, setNumbers] = useState(new Array(1000));
    return html`<h1>HUE</h1>
    <div>
      ${numbers.map((number, index) =>
        {
          return html`<${DynamicRendering} isBot=${isBot}><li>${index}</li></${DynamicRendering}>`
        })}
    </div>`
  }
}
