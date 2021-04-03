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
    { html }  = require('htm/preact'),
    TextInput = this.locator.locate('view/molecules/text-input'),
    { useState } = require('preact/hooks')

    return Counter({ html, useState, TextInput })
  }
}

module.exports = CounterLocator
