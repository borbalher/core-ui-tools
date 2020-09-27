module.exports = (components) =>
{
  const
  Application = require('browser/core/application'),
  app         = new Application(components)

  app.run()

  window.App = app
}
