import 'common/view/styles/globals.scss'

const
Application = require('browser/core/application'),
app         = new Application({
	'schema'              			: require('schema/config'),
	'infrastructure/bus'  			: require('common/infrastructure/bus/config'),
	'core/event/composer' 			: require('common/core/event/composer/config'),
	'core/listener'       			: require('common/core/listener/config'),
	'core/bootstrap'      			: require('common/core/bootstrap/config'),
	'view/components'     			: require('common/view/components/config'),
	'view/documents'      			: require('common/view/document/config'),
	'view/app'            			: require('common/view/app/config'),
	'view/hooks'          			: require('common/view/hooks/config'),
	'view/hydrate'        			: require('browser/view/hydrate/config'),
	'view/strategies'     			: require('common/view/strategies/config'),
  'core/internationalization' : require('common/core/internationalization/config'),
})

app.run()