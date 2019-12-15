const
CoreFactory = require('../factory'),
coreFactory = new CoreFactory(),
core        = coreFactory.create([
  { name: 'core/common/bootstrap' },
  { name: 'core/common/schema' },
  { name: 'core/common/string' },
  { name: 'core/common/object' },
  { name: 'core/node/schema/bootstrap' },
  { name: 'core/node/schema-to-form-body' },
  { name: 'domain' },
  { name: 'ui' }
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
