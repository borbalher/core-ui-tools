const StaticRenderStrategy = require('.')

class StaticRenderStrategyLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState, useRef, useEffect } = require('preact/hooks'),
    { html }                        = require('htm/preact'),
    EMPTY_HTML                      = { __html: '' }


    return StaticRenderStrategy({ html, useState, useRef, useEffect, EMPTY_HTML })
  }
}

module.exports = StaticRenderStrategyLocator
