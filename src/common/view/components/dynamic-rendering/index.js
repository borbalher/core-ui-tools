
module.exports = ({ html, useState, DynamicRenderingStrategy}) =>
{
  return ({ isBot }) =>
  {
    const array = new Array(1000).fill(1);
    for(const index in array)
      array[index]  = Number(index) + 1

    const [numbers, setNumbers] = useState(array);
    return html`<h1>Dynamic Strategy</h1>
    <div>
      ${numbers.map((number, index) =>
        {
          return html`<${DynamicRenderingStrategy} isBot=${isBot}><li>${index}</li></${DynamicRenderingStrategy}>`
        })}
    </div>`
  }
}
