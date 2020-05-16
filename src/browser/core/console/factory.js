const Console = require('.')

class BrowserConsoleFactory
{
  constructor(dateformat, console, defaults, string)
  {
    this.dateformat = dateformat
    this.console    = console
    this.defaults   = defaults
    this.string     = string
  }

  create(config = {})
  {
    return new Console(this.dateformat, { ...this.defaults, ...config }, console, this.string)
  }
}

module.exports = BrowserConsoleFactory
