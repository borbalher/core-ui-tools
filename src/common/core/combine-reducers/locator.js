const CombineReducers = require('.')

class CombineReducersLocator
{
  locate()
  {
    return new CombineReducers()
  }
}

module.exports = CombineReducersLocator
