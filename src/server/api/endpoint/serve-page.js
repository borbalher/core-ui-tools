const Dispatcher = require('node/core/http/server/dispatcher')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class ServePage extends Dispatcher
{
  async dispatch()
  {
    const
    page = this.locator.locate('view/page'),
    body = await page.render({
      page     : this.route.page,
      document : this.route.document,
      hash     : process.env.HASH,
      ...this.route.dto
    })

    this.view.body = body
  }
}

module.exports = ServePage
