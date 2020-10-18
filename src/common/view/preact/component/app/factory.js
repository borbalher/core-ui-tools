const App = require('.')

class AppFactory
{
  create({ props })
  {
    return new App({ props })
  }
}

module.exports = AppFactory
