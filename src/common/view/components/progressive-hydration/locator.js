const ProgressiveRendering = require('.')

class ProgressiveRenderingLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState }                 = require('preact/hooks'),
    { html }                     = require('htm/preact'),
    ProgressiveRenderingStrategy = this.locator.locate('view/strategies/progressive')

    return ProgressiveRendering({ html, useState, ProgressiveRenderingStrategy })
  }
}

module.exports = ProgressiveRenderingLocator
