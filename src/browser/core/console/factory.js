const Console = require('.')

class BrowserConsoleFactory
{
  constructor(util, dateformat, console, defaults, string)
  {
    this.util       = util
    this.dateformat = dateformat
    this.console    = console
    this.defaults   = defaults
    this.string     = string
  }

  create(config = {})
  {
    return new Console(this.util, this.dateformat, { ...this.defaults, ...config }, console, this.string)
  }
}

module.exports = BrowserConsoleFactory
