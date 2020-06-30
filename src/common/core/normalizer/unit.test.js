
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
      { name: 'common/core/schema' },
      { name: 'common/core/normalizer' }
    ])

    core.load().then(() =>
    {
      normalizer = core.locate('core/normalizer')
      composer   = core.locate('core/schema/composer')
      done()
    })
  })

  it('Can get entity type', () =>
  {
    let type

    type = normalizer.getEntityType('entity/node')
    expect(type).to.be.equal('node')

    type = normalizer.getEntityType('value/edge')
    expect(type).to.be.equal(undefined)
  })

  it('Can check if schema name is for an entity', () =>
  {
    let isEntity

    isEntity = normalizer.isEntity('entity/node')
    expect(isEntity).to.be.equal(true)

    isEntity = normalizer.isEntity('value/edge')
    expect(isEntity).to.be.equal(false)
  })

  it('Can normalize a json and get the json back', () =>
  {
    const
    graph = composer.compose('entity/graph', {
      id    : 'my-graph',
      nodes : [
        {
          id   : 'a',
          name : 'a'
        },
        {
          id   : 'b',
          name : 'b'
        },
        {
          id   : 'c',
          name : 'c'
        },
        {
          id   : 'd',
          name : 'd'
        }
      ],
      edges : [
        {
          source  : 'a',
          target  : 'b',
          payload : {}
        },
        {
          source  : 'a',
          target  : 'c',
          payload : {}
        },
        {
          source  : 'c',
          target  : 'd',
          payload : {}
        }
      ]
    }),
    entities           = normalizer.normalize(graph, 'entity/graph'),
    reconstructedGraph = normalizer.denormalize(entities['graph'].byId['my-graph'], 'entity/graph', entities)
    expect(graph).to.be.deep.equal(reconstructedGraph)
  })

  it('Can normalize a json and get the json back', () =>
  {
    const
    graph = composer.compose('entity/graph', {
      id    : 'my-graph',
      nodes : [
        {
          id   : 'a',
          name : 'a'
        },
        {
          id   : 'b',
          name : 'array'
        },
        {
          id   : 'c',
          name : 'array'
        },
        {
          id   : 'd',
          name : 'array'
        },
        {
          id   : 'e',
          name : 'array'
        },
        {
          id   : 'f',
          name : 'array'
        },
        {
          id   : 'g',
          name : 'array'
        },
        {
          id   : 'h',
          name : 'array'
        },
        {
          id   : 'i',
          name : 'array'
        },
        {
          id   : 'j',
          name : 'array'
        },
        {
          id   : 'k',
          name : 'array'
        },
        {
          id   : 'l',
          name : 'array'
        },
        {
          id   : 'm',
          name : 'array'
        }
      ],
      edges : [
        {
          source  : 'a',
          target  : 'b',
          payload : {}
        },
        {
          source  : 'a',
          target  : 'c',
          payload : {}
        },
        {
          source  : 'c',
          target  : 'd',
          payload : {}
        },
        {
          source  : 'c',
          target  : 'e',
          payload : {}
        },
        {
          source  : 'd',
          target  : 'f',
          payload : {}
        },
        {
          source  : 'd',
          target  : 'g',
          payload : {}
        },
        {
          source  : 'g',
          target  : 'h',
          payload : {}
        },
        {
          source  : 'g',
          target  : 'i',
          payload : {}
        },
        {
          source  : 'i',
          target  : 'j',
          payload : {}
        },
        {
          source  : 'i',
          target  : 'k',
          payload : {}
        },
        {
          source  : 'k',
          target  : 'l',
          payload : {}
        },
        {
          source  : 'k',
          target  : 'm',
          payload : {}
        }
      ]
    }),
    entities           = normalizer.normalize(graph, 'entity/graph'),
    reconstructedGraph = normalizer.denormalize(entities['graph'].byId['my-graph'], 'entity/graph', entities)
    expect(graph).to.be.deep.equal(reconstructedGraph)
  })
})
