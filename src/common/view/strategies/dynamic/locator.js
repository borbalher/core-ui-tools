class DynamicLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useRef }    = require('preact/hooks'),
    { html }      = require('htm/preact'),
    Dynamic       = require('.'),
    useNearScreen = this.locator.locate('view/hooks/near-screen')

    return Dynamic({ html, useRef, useNearScreen })
  }
}

module.exports = DynamicLocator