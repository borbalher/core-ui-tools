const StaticContent = require('.')

class StaticContentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState }          = require('preact/hooks'),
    { html }              = require('htm/preact'),
    StaticContentStrategy = this.locator.locate('view/strategies/static')

    return StaticContent({ html, useState, StaticContentStrategy })
  }
}

module.exports = StaticContentLocator
