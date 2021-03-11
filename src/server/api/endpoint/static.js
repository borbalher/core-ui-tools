const
Dispatcher = require('server/core/http/server/dispatcher'),
fs         = require('fs'),
path       = require('path')

/**
 * @memberof Api
 * @extends {superhero/core/http/server/dispatcher}
 */
class StaticEndpoint extends Dispatcher
{
  async dispatch()
  {
    this.view.meta.contentType = this.route.contentType
    this.view.body = fs.readFileSync(path.resolve(`src/server/view/resources/html/${this.route.file}`), 'utf8')
  }
}

module.exports = StaticEndpoint
