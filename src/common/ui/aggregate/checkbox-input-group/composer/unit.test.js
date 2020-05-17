describe('src/common/domain/schema/composer/checkbox-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  checkboxInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                      path: 'common/core/bootstrap' },
      { name: 'core/object',                         path: 'common/core/object' },
      { name: 'core/schema',                         path: 'common/core/schema' },
      { name: 'domain/schema',                       path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',               path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',                 path: 'common/core/data-structure' },
      { name: 'core/component/composer',             path: 'common/domain/schema/composer/component' },
      { name: 'core/component/checkbox-input',       path: 'common/domain/schema/composer/checkbox-input' },
      { name: 'core/component/checkbox-input-group', path: 'common/domain/schema/composer/checkbox-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer                   = core.locate('core/schema/composer')
        checkboxInputGroupComposer = core.locate('core/checkbox-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a checkbox input group', () =>
  {
    const
    checkboxInputGroup = checkboxInputGroupComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input-group', checkboxInputGroup)
    }).to.not.throw()
  })
})
