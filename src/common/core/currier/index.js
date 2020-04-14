/**
 * For simplicity this implementation not receive an arity argument so the function passed to curry must declare all its parameters.
 * @param {*} f
 */
const curry = (func) =>
{
  return function curried(...args)
  {
    if(args.length >= func.length)
    {
      return func.apply(this, args)
    }
    else
    {
      return function(...args2)
      {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

/*
const divisible = (mod, num) =>
{
  return !(num % mod)
}

let curriedDivisible = curry(divisible)

curriedDivisible(2 , 10)                // true, still callable normally
curriedDivisible(2)(10)                 // true, currying of 1st arg

let divisibleBy2 = curry(divisible)(2) // allows cool stuff like this
divisibleBy2(10)                       // true, currying of 1st arg

*/

module.exports = curry
