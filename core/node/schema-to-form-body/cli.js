const
path        = require('path'),
CoreFactory = require('../factory'),
coreFactory = new CoreFactory(),
core        = coreFactory.create([
  { name: 'core/common/bootstrap',         path: path.resolve(__dirname, '../../common/bootstrap') },
  { name: 'core/common/schema',            path: path.resolve(__dirname, '../../common/schema') },
  { name: 'core/common/string',            path: path.resolve(__dirname, '../../common/string') },
  { name: 'core/common/object',            path: path.resolve(__dirname, '../../common/object') },
  { name: 'core/node/schema/bootstrap',    path: path.resolve(__dirname, '../../node/schema/bootstrap') },
  { name: 'core/node/schema-to-form-body', path: path.resolve(__dirname, '../../node/schema-to-form-body') },
  { name: 'domain',                        path: path.resolve(__dirname, '../../../../../src/domain') }
])

core.load().then(() =>
{
  core.locate('core/bootstrap').bootstrap().then(async () =>
  {
    const schemaToFormBody = core.locator.locate('core/schema-to-form-body')

    for(const schema of process.argv.slice(2))
      await schemaToFormBody.schemaToFormBody(schema)
  })
})
