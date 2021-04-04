const ToggeableFieldset = require('.')

class ToggeableFieldsetLocator
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
    CheckboxInputGroup      = this.locator.locate('view/molecules/checkbox-input'),
    Fieldset                = this.locator.locate('view/molecules/fieldset')

    return ToggeableFieldset({
      html,
      useState,
      CheckboxInputGroup,
      useEffect,
      Fieldset
    })
  }
}

module.exports = ToggeableFieldsetLocator
