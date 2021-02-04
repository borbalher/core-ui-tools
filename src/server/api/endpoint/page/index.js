const
{ html }   = require('htm/preact'),
Dispatcher = require('node/core/http/server/dispatcher'),
document   = require('./document')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class IndexPage extends Dispatcher
{
  async dispatch()
  {
    const
    Index = this.locator.locate('view/component/index'),
    Base  = this.locator.locate('view/document/base')

    this.view.body  = Base.render({
      body    : html`<${Index}/>`,
      lang    : 'en',
      title   : 'Index',
      charset : 'utf-8',
      content : 'width=device-width, initial-scale=.85',
      id      : 'index',
      hash    : process.env.COMPILATION_HASH || 'HAasfSH'
    })
  }
}

module.exports = IndexPage
