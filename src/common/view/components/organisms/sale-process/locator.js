const SaleProcess = require('.')

class SaleProcessLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { useState }         = require('preact/hooks'),
    { html }             = require('htm/preact'),
    internationalization = this.locator.locate('core/internationalization'),
    TextInput            = this.locator.locate('view/molecules/text-input'),
    PasswordInput        = this.locator.locate('view/molecules/password-input'),
    Form                 = this.locator.locate('view/molecules/form'),
    Button               = this.locator.locate('view/atoms/button')

    return SaleProcess({ internationalization, html, useState, Form, TextInput, PasswordInput, Button })
  }
}

module.exports = SaleProcessLocator
