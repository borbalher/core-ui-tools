const Progressive = require('.')

class ProgressiveLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useEffect, useRef }     = require('preact/hooks'),
    { html, render, hydrate } = require('htm/preact'),
    useNearScreen             = this.locator.locate('view/hooks/near-screen'),
    EMPTY_HTML                = { __html: '' },
    isServer                  = typeof window === 'undefined'

    return Progressive({ isServer, html, useRef, useEffect, render, hydrate, useNearScreen, EMPTY_HTML })
  }
}

module.exports = ProgressiveLocator
