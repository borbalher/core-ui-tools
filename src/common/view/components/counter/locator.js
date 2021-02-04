const Counter = require('.')

class CounterLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState } = require('preact/hooks'),
    { html }     = require('htm/preact')

    return Counter({ html, useState })
  }
}

module.exports = CounterLocator
