const DynamicRendering = require('.')

class CounterLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState }     = require('preact/hooks'),
    { html }         = require('htm/preact'),
    DynamicRendering = this.locator.locate('view/strategies/dynamic')

    return DynamicRendering({ html, useState, DynamicRendering })
  }
}

module.exports = CounterLocator
