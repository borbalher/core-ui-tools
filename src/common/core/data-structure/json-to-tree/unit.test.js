describe('data-structure/json-to-tree', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  jsonToTreeFactory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/core/data-structure' }
    ])

    core.load().then(() =>
    {
      jsonToTreeFactory = core.locate('data-structure/json-to-tree/factory')
      done()
    })
  })

  it('Can get a tree from a JSON', () =>
  {
    const
    jsonToTree             = jsonToTreeFactory.create(),
    { nodes, edges, root } = jsonToTree.convert({
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
      { id: 'a', name: 'a', parentId: undefined },
      { id: 'b', name: 'b', parentId: 'a' },
      { id: 'd', name: 'd', parentId: 'c' },
      { id: 'c', name: 'c', parentId: 'a' }
    ])
    expect(edges).to.deep.equal([
      { source: 'a', target: 'b', payload: {} },
      { source: 'c', target: 'd', payload: {} },
      { source: 'a', target: 'c', payload: {} }
    ])
    expect(root).to.deep.equal('a')
  })
})
