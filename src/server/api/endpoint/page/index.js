const
{ html }   = require('htm/preact'),
Index      = require('common/view/components/index'),
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
    this.view.body  = document({
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
