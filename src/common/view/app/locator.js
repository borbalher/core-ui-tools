const
App               = require('.'),
{ html }          = require('htm/preact'),
{ createContext } = require('preact')

class AppLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    BOTS_USER_AGENTS = this.locator
      .locate('core/configuration')
      .find('view.user-agents'),
    BotContext = createContext()

    return App({ html, BOTS_USER_AGENTS, BotContext })
  }
}

module.exports = AppLocator
