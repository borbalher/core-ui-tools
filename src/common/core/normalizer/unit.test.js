
describe('core/common/normalizer', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  normalizer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/normalizer/test' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        normalizer = core.locate('core/normalizer')
        composer   = core.locate('core/schema/composer')
        done()
      })
    })
  })

  it('Can get entity type', () =>
  {
    let type

    type = normalizer.getEntityType('entity/a')
    expect(type).to.be.equal('a')

    type = normalizer.getEntityType('value-object/a')
    expect(type).to.be.equal(undefined)
  })

  it('Can check if schema name is for an entity', () =>
  {
    let isEntity

    isEntity = normalizer.isEntity('entity/a')
    expect(isEntity).to.be.equal(true)

    isEntity = normalizer.isEntity('value-object/a')
    expect(isEntity).to.be.equal(false)
  })

  it('Can normalize a json and get the json back', () =>
  {
    const
    composedFoobar = composer.compose('entity/foobar', {
      id  : 'foobar-id',
      foo :
      [
        {
          id    : 'foo-id',
          value : 'foo',
          bar   :
          {
            id    : 'foo-bar-id',
            value : 'foo > bar'
          }
        }
      ],
      bar :
      {
        id    : 'bar-id',
        value : 'bar'
      },
      baz :
      {
        value : 'baz'
      }
    }),
    entities            = normalizer.normalize(composedFoobar, 'entity/foobar'),
    reconstructedFoobar = normalizer.denormalize(entities['foobar'].byId['foobar-id'], 'entity/foobar', entities)
    expect(composedFoobar).to.be.deep.equal(reconstructedFoobar)
  })
})
