const
CoreFactory = require('node/core/factory'),
coreFactory = new CoreFactory(),
core        = coreFactory.create({
  'schema'              : require('schema/config'),
  'core/resource'       : require('node/core/resource/config'),
  'core/process'        : require('node/core/process/config'),
  'core/http/server'    : require('node/core/http/server/config'),
  'server/view'         : require('server/view/config'),
  'infrastructure/bus'  : require('common/infrastructure/bus/config'),
  'core/event/composer' : require('common/core/event/composer/config'),
  'core/listener'       : require('common/core/listener/config'),
  'core/bootstrap'      : require('common/core/bootstrap/config'),
  'api'                 : require('server/api/config'),
  'view/components'     : require('common/view/components/config'),
  'view/documents'      : require('common/view/document/config'),
  'view/pages'          : require('common/view/pages/config'),
  'view/app'            : require('common/view/app/config'),
  'view/hooks'          : require('common/view/hooks/config'),
})

core
  .locate('core/bootstrap')
  .bootstrap()
  .then(() =>
  {
    core.locate('core/http/server').listen({ port: 2431 })
  })
