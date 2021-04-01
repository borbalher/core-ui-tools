
module.exports = ({ html, useState, ProgressiveRenderingStrategy}) =>
{
  return ({ isBot }) =>
  {
    const array = new Array(1000).fill(1);
    for(const index in array)
      array[index]  = Number(index) + 1

    const [numbers, setNumbers] = useState(array);
    return html`<h1>Progressive strategy</h1>
    <div>
      ${numbers.map((number, index) =>
        {
          return html`<${ProgressiveRenderingStrategy} force=${index <= 10}><li>${index}</li></${ProgressiveRenderingStrategy}>`
        })}
    </div>`
  }
}
