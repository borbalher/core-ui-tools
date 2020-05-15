describe('data-structure/json-to-tree', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  jsonToGraph

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'common/core/data-structure' },
      { name: 'node/core/schema/bootstrap' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        jsonToGraph = core.locate('data-structure/json-to-tree')
        done()
      })
    })
  })

  it('Can get a tree from a JSON', () =>
  {
    const { nodes, edges } = jsonToGraph.convert({
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
      { source: 'c', target: 'd', payload: {} },
      { source: 'a', target: 'c', payload: {} }
    ])
  })
})
