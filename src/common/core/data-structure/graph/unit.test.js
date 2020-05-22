describe('data-structure/graph', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/core/data-structure' }
    ])

    core.load().then(() =>
    {
      factory = core.locate('data-structure/graph')
      done()
    })
  })

  it('Can create a graph', () =>
  {
    expect(() =>
    {
      factory.create(
        'my-graph',
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
        true,
        'entity/graph'
      )
    }).to.not.throw()
  })


  it('Can create a graph (optionals)', () =>
  {
    expect(() =>
    {
      factory.create('my-graph')
    }).to.not.throw()
  })

  it('Can get adjacent nodes', () =>
  {
    const graph = factory.create(
      'my-graph',
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
      true,
      'entity/graph'
    )

    let adjacentNodes = graph.getAdjacentNodes('a')

    expect(adjacentNodes).to.be.deep.equal(['b', 'c'])

    adjacentNodes = graph.getAdjacentNodes('b')

    expect(adjacentNodes).to.be.deep.equal([])
  })

  it('Can clear a graph', () =>
  {
    const graph = factory.create(
      'my-graph',
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
      true,
      'entity/graph'
    )

    graph.reset()

    const serialized = graph.serialize()

    expect(serialized).to.deep.equal({
      nodes : [],
      links : []
    })
  })

  it('Can add a node', () =>
  {
    const
    graph  = factory.create(
      'my-graph',
      [
        {
          id   : 'a',
          name : 'a'
        }
      ],
      undefined,
      true
    )

    graph.addNodes([
      {
        id   : 'b',
        name : 'b'
      }
    ])

    expect(graph.totalNodes()).to.deep.equal(2)
  })

  it('Can add an edge in a directed graph', () =>
  {
    const graph  =  factory.create(
      'my-graph',
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

    graph.addEdges([
      {
        source  : 'b',
        target  : 'a',
        payload : {
          weight : 0.8
        }
      }
    ])

    expect(graph.edges.length()).to.deep.equal(1)
  })

  it('Can add an edge in a undirected graph', () =>
  {
    const graph  =  factory.create(
      'my-graph',
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
        'my-graph',
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

  it('BFS should return a path for a graph if startNode exists and targetNode is specified', () =>
  {
    const graph  =  factory.create(
      'my-graph',
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
    path = graph.bfs('a', 'c')

    expect(path).to.deep.equal(['a', 'b', 'c'])
  })

  it('BFS should return a full path for a graph if startNode exists and targetNode is not specified', () =>
  {
    const graph  =  factory.create(
      'my-graph',
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

  it('BFS should return an empty path for a graph if startNode does not exists', () =>
  {
    const graph  =  factory.create(
      'my-graph',
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
    path = graph.bfs()

    expect(path).to.deep.equal([])
  })

  it('Can serialize a graph', () =>
  {
    const
    graph  = factory.create(
      'my-graph',
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

  it('DFS should return a path for a graph if startNode exists and targetNode is specified', () =>
  {
    const graph = factory.create(
      'my-graph',
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
    path = graph.dfs('a', 'd')

    expect(path).to.deep.equal(['a', 'b', 'd'])
  })

  it('DFS should return a full path for a graph if startNode exists and targetNode is not specified', () =>
  {
    const graph = factory.create(
      'my-graph',
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

  it('DFS should return an empty path for a graph if startNode does not exists', () =>
  {
    const graph = factory.create(
      'my-graph',
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
    path = graph.dfs('not-exists')

    expect(path).to.deep.equal([])
  })

  it('Should return the proper string tag ', async () =>
  {
    const graph = factory.create(
      'my-graph',
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
})
