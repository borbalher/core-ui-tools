const
{ useState } = require('preact/hooks'),
{ html }     = require('htm/preact')

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  // You can also pass a callback to the setter
  const decrement = () => setCount((currentCount) => currentCount - 1);

  return html`
  <div>
    <p>Count: ${count}</p>
    <button onClick=${increment}>Increment</button>
    <button onClick=${decrement}>Decrement</button>
  </div>`
}

module.exports = Counter
