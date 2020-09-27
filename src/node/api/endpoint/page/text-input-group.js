const Dispatcher = require('node/core/http/server/dispatcher')

class TextInputGroupPageEndpoint extends Dispatcher
{
  async dispatch()
  {
    const
    pageAggregate = this.locator.locate('aggregate/page'),
    { lang }      = this.session

    this.view.body  = await pageAggregate.compose(this.route.template, { lang })
  }
}

module.exports = TextInputGroupPageEndpoint
