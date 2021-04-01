const NearScreen = require('.')

class NearScreenLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState, useEffect } = require('preact/hooks'),
    { html }                = require('htm/preact')

    return NearScreen({ html, useState, useEffect })
  }
}

module.exports = NearScreenLocator
