const Console = require('.')

class NodeConsoleFactory
{
  constructor(util, dateformat, console, defaults, coreString)
  {
    this.util       = util
    this.dateformat = dateformat
    this.console    = console
    this.defaults   = defaults
    this.coreString = coreString
  }

  create(options = {})
  {
    return new Console(this.util, this.dateformat, { ...this.defaults, ...options }, console, this.coreString)
  }
}

module.exports = NodeConsoleFactory
