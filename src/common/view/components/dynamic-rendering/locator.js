const DynamicRendering = require('.')

class DynamicRenderingLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState }             = require('preact/hooks'),
    { html }                 = require('htm/preact'),
    DynamicRenderingStrategy = this.locator.locate('view/strategies/dynamic')

    return DynamicRendering({ html, useState, DynamicRenderingStrategy })
  }
}

module.exports = DynamicRenderingLocator
