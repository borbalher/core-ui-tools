const
Dispatcher = require('server/core/http/server/dispatcher'),
{ html }   = require('htm/preact')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class IndexPage extends Dispatcher
{
  async dispatch()
  {
    const
    App       = this.locator.locate(`view/app`),
    Layout    = this.locator.locate(`view/document/${this.route.document}`)

    let
    props = { url : this.request.url }

    if(App.getServerSideProps && typeof App.getServerSideProps === 'function')
    {
      const ssp = await App.getServerSideProps({ ctx : { request: this.request, route: this.route }})
      props = { ...props, ...ssp }
    }

    this.view.body = Layout.render({ props })
  }
}

module.exports = IndexPage
