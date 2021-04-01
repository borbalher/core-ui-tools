class ProgressiveLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    Progressive               = require('.'),
    { useEffect, useRef }     = require('preact/hooks'),
    { html, render, hydrate } = require('htm/preact'),
    useNearScreen             = this.locator.locate('view/hooks/near-screen'),
    EMPTY_HTML                = { __html: '' },
    isServer                  = process.env.PLATFORM === 'node'

    return Progressive({
      isServer,
      html,
      useRef,
      useEffect,
      render,
      hydrate,
      useNearScreen,
      EMPTY_HTML
    })
  }
}

module.exports = ProgressiveLocator
