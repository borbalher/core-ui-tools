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
    BotContext           = createContext(),
    { Router }           = require('preact-router'),
    ToDo                 = this.locator.locate('view/component/todos'),
    DynamicRendering     = this.locator.locate('view/component/dynamic-rendering'),
    ProgressiveRendering = this.locator.locate('view/component/progressive-hydration'),
    StaticContent        = this.locator.locate('view/component/static-content'),
    Counter              = this.locator.locate('view/component/counter'),
    Playground           = this.locator.locate('view/pages/playground')

    return App({ html, BOTS_USER_AGENTS, BotContext, Router, ToDo, DynamicRendering, ProgressiveRendering, StaticContent, Playground })
  }
}

module.exports = AppLocator
