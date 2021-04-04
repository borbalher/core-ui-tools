const Textarea = require('.')

class TextareaLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html }                = require('htm/preact'),
    { useState, useEffect } = require('preact/hooks'),
    internationalization    = this.locator.locate('core/internationalization'),
    InputGroup              = this.locator.locate('view/molecules/input-group')


    return Textarea({
      html,
      internationalization,
      InputGroup,
      html,
      useState,
      useEffect
    })
  }
}

module.exports = TextareaLocator
