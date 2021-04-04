const Playground = require('.')

class PlaygroundLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html }          = require('htm/preact'),
    TextInput         = this.locator.locate('view/molecules/text-input'),
    PasswordInput     = this.locator.locate('view/molecules/password-input'),
    NumberInput       = this.locator.locate('view/molecules/number-input'),
    CheckboxInput     = this.locator.locate('view/molecules/checkbox-input'),
    Select            = this.locator.locate('view/molecules/select'),
    Form              = this.locator.locate('view/molecules/form'),
    Textarea          = this.locator.locate('view/molecules/textarea'),
    ToggeableFieldset = this.locator.locate('view/molecules/toggeable-fieldset'),
    RadioInput        = this.locator.locate('view/molecules/radio-input'),
    Login             = this.locator.locate('view/organisms/login'),
    { useState }      = require('preact/hooks')

    return Playground({ Login, Form, RadioInput, html, useState, TextInput, PasswordInput, NumberInput, CheckboxInput, Select, Textarea, ToggeableFieldset })
  }
}

module.exports = PlaygroundLocator
