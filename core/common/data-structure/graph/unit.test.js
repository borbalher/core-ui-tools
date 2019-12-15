describe('data-structure/graph', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../node/factory')

  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'core/common/bootstrap' },
      { name: 'core/common/schema' },
      { name: 'core/common/data-structure' },
      { name: 'core/node/schema/bootstrap' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        factory = core.locate('data-structure/graph/factory')
        done()
      })
    })
  })

  it('Can create a graph', () =>
  {
    expect(() =>
    {
      factory.create(
        [
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
          }
        ],
        [
          {
            source  : 'a',
            target  : 'b',
            payload : {}
          },
          {
            source  : 'a',
            target  : 'c',
            payload : {}
          }
        ],
        true
      )
    }).to.not.throw()
  })

  it('Can add a node', () =>
  {
    const
    graph  = factory.create(
      [
        {
          id   : 'a',
          name : 'a'
        }
      ],
      undefined,
      true
    )

    graph.addNode({
      id   : 'b',
      name : 'b'
    })

    expect(graph.totalNodes()).to.deep.equal(2)
  })

  it('Can add an edge in a directed graph', () =>
  {
    const graph  =  factory.create(
      [
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
        }
      ],
      undefined,
      true
    )

    graph.addEdge({
      source  : 'b',
      target  : 'a',
      payload : {
        weight : 0.8
      }
    })

    expect(graph.edges.length()).to.deep.equal(1)
  })

  it('Can add an edge in a undirected graph', () =>
  {
    const graph  =  factory.create(
      [
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
        }
      ],
      [],
      false
    )

    graph.addEdge({
      source  : 'b',
      target  : 'a',
      payload : {
        weight : 0.8
      }
    })

    expect(graph.edges.length()).to.deep.equal(2)
  })

  it('Can print a graph', () =>
  {
    expect(() =>
    {
      const graph  =  factory.create(
        [
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
          }
        ],
        [
          {
            source  : 'a',
            target  : 'b',
            payload : {}
          },
          {
            source  : 'a',
            target  : 'c',
            payload : {}
          }
        ],
        true
      )

      graph.printGraph()
    }).to.not.throw()
  })

  it('Can get a BFS path for a graph if startNode exists', () =>
  {
    const graph  =  factory.create(
      [
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
      [
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
          source  : 'b',
          target  : 'a',
          payload : {}
        },
        {
          source  : 'b',
          target  : 'd',
          payload : {}
        }
      ],
      true
    ),
    path = graph.bfs('a')

    expect(path).to.deep.equal(['a', 'b', 'c', 'd'])
  })

  it('Can serialize a graph', () =>
  {
    const
    graph  = factory.create(
      [
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
      [
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
          source  : 'b',
          target  : 'a',
          payload : {}
        },
        {
          source  : 'b',
          target  : 'd',
          payload : {}
        }
      ],
      true
    ),
    serialized = graph.serialize()

    expect(serialized).to.deep.equal({
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
      links : [
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
          source  : 'b',
          target  : 'a',
          payload : {}
        },
        {
          source  : 'b',
          target  : 'd',
          payload : {}
        }
      ]
    })
  })

  it('Can get a DFS path for a graph if startNode exists', () =>
  {
    const graph = factory.create(
      [
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
      [
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
          source  : 'b',
          target  : 'a',
          payload : {}
        },
        {
          source  : 'b',
          target  : 'd',
          payload : {}
        }
      ],
      true
    ),
    path = graph.dfs('a')

    expect(path).to.deep.equal(['a', 'b', 'd', 'c'])
  })

  it('Should throw an error while getting a BFS path for a graph if startNode does not exists', () =>
  {
    expect(() =>
    {
      const graph = factory.create(
        [
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
        [
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
            source  : 'b',
            target  : 'a',
            payload : {}
          },
          {
            source  : 'b',
            target  : 'd',
            payload : {}
          }
        ],
        true
      )

      graph.bfs('I don\'t exists')
    }).to.throw()
  })

  it('Should throw an error while getting a DFS path for a graph if startNode does not exists', () =>
  {
    expect(() =>
    {
      const graph = factory.create(
        [
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
        [
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
            source  : 'b',
            target  : 'a',
            payload : {}
          },
          {
            source  : 'b',
            target  : 'd',
            payload : {}
          }
        ],
        true
      )

      graph.dfs('I don\'t exists')
    }).to.throw()
  })

  it('Should return the proper string tag ', async () =>
  {
    const graph = factory.create(
      [
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
      [
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
          source  : 'b',
          target  : 'a',
          payload : {}
        },
        {
          source  : 'b',
          target  : 'd',
          payload : {}
        }
      ],
      true
    )

    let stringTag = Object.prototype.toString.call(graph)

    expect(stringTag).to.deep.equal('[object Graph]')

    stringTag = Object.prototype.toString.call(factory)

    expect(stringTag).to.deep.equal('[object GraphFactory]')
  })

  it('Can set a graph from a JSON', () =>
  {
    const graph = factory.create()

    graph.setGraphFromJSON({
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

    const serialized = graph.serialize()
    expect(serialized).to.deep.equal({
      nodes : [
        { id: 'b', name: 'b' },
        { id: 'd', name: 'd' },
        { id: 'c', name: 'c' },
        { id: 'a', name: 'a' }
      ],
      links : [
        { source: 'a', target: 'b', payload: {} },
        { source: 'a', target: 'c', payload: {} },
        { source: 'c', target: 'd', payload: {} }
      ]
    })
  })
})
