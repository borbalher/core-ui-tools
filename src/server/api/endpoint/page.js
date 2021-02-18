const
Dispatcher = require('node/core/http/server/dispatcher'),
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
    Layout    = this.locator.locate(`view/document/${this.route.document}`),
    Component = this.locator.locate(`view/page/${this.route.page}`)

    let
    props = { url : this.route.url }

    if(App.getServerSideProps && typeof App.getServerSideProps === 'function')
    {
      const ssp = await App.getServerSideProps({ Component, ctx : { request: this.request, route: this.route }})
      props = { ...props, ...ssp }
    }

    this.view.body = Layout.render({
      app  : html`<${App} Component=${Component} props=${props}></${App}>`,
      page : this.route.page,
      props
    })
  }
}

module.exports = IndexPage
