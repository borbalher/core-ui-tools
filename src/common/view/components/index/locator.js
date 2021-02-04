const Index = require('.')

class ClockLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    { html, Component } = require('htm/preact'),
    ToDo                = this.locator.locate('view/component/todos'),
    Clock               = this.locator.locate('view/component/clock'),
    Counter             = this.locator.locate('view/component/counter')

    return Index({ html, Component, ToDo, Clock, Counter })
  }
}

module.exports = ClockLocator
