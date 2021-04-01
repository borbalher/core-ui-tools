
module.exports = ({ html, useState }) =>
{
  return ({ initialCount }) =>
  {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount((currentCount) => currentCount - 1);

    return html`
    <div>
      <p>Count: ${count}</p>
      <button onClick=${increment}>Increment</button>
      <button onClick=${decrement}>Decrement</button>
    </div>`
  }
}
