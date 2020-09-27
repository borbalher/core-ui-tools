const TextInputGroupPageAggregate = require('.')

class TextInputGroupPageAggregateLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new TextInputGroupPageAggregate(composer)
  }
}

module.exports = TextInputGroupPageAggregateLocator

