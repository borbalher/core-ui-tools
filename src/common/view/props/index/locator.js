const IndexProps = require('.')

class IndexPropsLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new IndexProps()
  }
}

module.exports = IndexPropsLocator
