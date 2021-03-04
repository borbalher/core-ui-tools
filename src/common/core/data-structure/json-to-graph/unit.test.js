describe('data-structure/json-to-graph', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  jsonToGraphFactory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/core/data-structure' }
    ])

    core.load().then(() =>
    {
      jsonToGraphFactory = core.locate('data-structure/json-to-graph/factory')
      done()
    })
  })

  it('Can get a graph from a JSON', () =>
  {
    const
    jsonToGraph      = jsonToGraphFactory.create(),
    { nodes, edges } = jsonToGraph.convert({
      id   : 'a',
      name : 'a',
      b    :
      {
        id   : 'b',
        name : 'b'
      },
      c :
      {
        id   : 'c',
        name : 'c',
        d    : {
          id   : 'd',
          name : 'd'
        }
      }
    })
    expect(nodes).to.deep.equal([
      { id: 'a', name: 'a' },
      { id: 'b', name: 'b' },
      { id: 'd', name: 'd' },
      { id: 'c', name: 'c' }
    ])
    expect(edges).to.deep.equal([
      { source: 'a', target: 'b', payload: {} },
      { source: 'b', target: 'a', payload: {} },
      { source: 'c', target: 'd', payload: {} },
      { source: 'd', target: 'c', payload: {} },
      { source: 'a', target: 'c', payload: {} },
      { source: 'c', target: 'a', payload: {} }
    ])
  })
})
