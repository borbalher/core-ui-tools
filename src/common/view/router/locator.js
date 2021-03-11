const
{ html }   = require('htm/preact'),
{ Router } = require('preact-router')

class AppLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const App = this.locator.locate('view/app')
    return App({ html, Router, App })
  }
}

module.exports = AppLocator
