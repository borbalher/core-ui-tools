const
Application = require('./node/core/application'),
app         = new Application([
  { name: 'node/view/resource' },
  { name: 'node/core/process' },
  { name: 'node/api' },
  { name: 'node/domain' },
  { name: 'node/core/http/server' },
  { name: 'node/view/handlebars' },
  { name: 'common/core/bootstrap' },
  { name: 'common/core/listener' },
  { name: 'common/core/object' },
  { name: 'common/core/string' },
  { name: 'common/core/data-structure' },
  { name: 'common/infrastructure/bus' },
  { name: 'common/core/moment' },
  { name: 'common/core/base64' },
  { name: 'node/core/dictionary' },

  { name: 'common/ui/composer' },

  { name: 'common/core/entity-set' },
  { name: 'common/core/listener' },
  { name: 'common/view/handlebars' },
  { name: 'common/core/normalizer' },
  { name: 'common/core/schema' },
  { name: 'common/core/event/composer' },

  { name: 'common/view/view-model/text-input-group-page' },
  { name: 'common/view/state/text-input-group-page' },


])

app.run(process.env.HTTP_PORT)

module.exports = app
