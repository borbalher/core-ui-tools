describe('data-structure/tree', () =>
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
      factory = core.locate('data-structure/tree')
      done()
    })
  })

  it('Can create a tree', () =>
  {
    expect(() =>
    {
      factory.create(
        'my-tree',
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
        'a'
      )
    }).to.not.throw()
  })

  it('Can set the tree root if node exists', () =>
  {
    const tree = factory.create(
      'my-tree',
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
      ]
    )

    tree.setRoot('a')

    expect(tree.root).to.deep.equal('a')
  })

  it('Should throw an error while setting the tree root if node does not exists', () =>
  {
    expect(() =>
    {
      const tree = factory.create(
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
        ]
      )

      tree.setRoot('I don\'t exists')
    }).to.throw()
  })

  it('Can get tree leaves', () =>
  {
    const tree = factory.create(
      'my-tree',
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
      ]
    ),
    leaves = tree.getLeaves()

    expect(leaves).to.deep.equal(['b', 'c'])
  })

  // it('Can get a JSON tree flattened', () =>
  // {
  //   const tree = factory.create(
  //     'my-tree',
  //     [
  //       {
  //         id   : 'a',
  //         name : 'a'
  //       },
  //       {
  //         id   : 'b',
  //         name : 'b'
  //       },
  //       {
  //         id   : 'c',
  //         name : 'c'
  //       },
  //       {
  //         id   : 'd',
  //         name : 'd'
  //       }
  //     ],
  //     [
  //       {
  //         source  : 'a',
  //         target  : 'b',
  //         payload : {}
  //       },
  //       {
  //         source  : 'a',
  //         target  : 'c',
  //         payload : {}
  //       },
  //       {
  //         source  : 'c',
  //         target  : 'd',
  //         payload : {}
  //       }
  //     ],
  //     'a'
  //   ),
  //   treeJSON = tree.getJSON(undefined, true)

  //   expect(treeJSON).to.deep.equal({
  //     'a' : {
  //       id   : 'a',
  //       name : 'a'
  //     },
  //     'a.b' : {
  //       id   : 'b',
  //       name : 'b'
  //     },
  //     'a.c' : {
  //       id   : 'c',
  //       name : 'c'
  //     },
  //     'a.c.d' : {
  //       id   : 'd',
  //       name : 'd'
  //     }
  //   })

  //   expect(() =>
  //   {
  //     tree.getJSON({ node: 'not-exists' })
  //   }).to.throw()
  // })

  it('Can get a JSON tree', () =>
  {
    const tree = factory.create(
      'my-tree',
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
          source  : 'c',
          target  : 'd',
          payload : {}
        }
      ],
      'a'
    ),
    treeJSON = tree.getJSON(undefined, false)

    expect(treeJSON).to.deep.equal({
      a : {
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
      }
    })
  })

  it.only('Can get a JSON tree with array', () =>
  {
    const tree = factory.create(
      'my-tree',
      [
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
      ],
      'a'
    ),
    treeJSON = tree.getJSON(undefined, false)

    expect(treeJSON).to.deep.equal({
      a :
      {
        id    : 'a',
        name  : 'a',
        array :
        [
          {
            id   : 'b',
            name : 'array'
          },
          {
            array :
            [
              {
                id    : 'd',
                name  : 'array',
                array : [
                  {
                    id   : 'f',
                    name : 'array'
                  },
                  {
                    id    : 'g',
                    name  : 'array',
                    array : [
                      {
                        id   : 'h',
                        name : 'array'
                      },
                      {
                        id    : 'i',
                        name  : 'array',
                        array : [
                          {
                            id   : 'j',
                            name : 'array'
                          },
                          {
                            id    : 'k',
                            name  : 'array',
                            array : [
                              {
                                id   : 'l',
                                name : 'array'
                              },
                              {
                                id   : 'm',
                                name : 'array'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id   : 'e',
                name : 'array'
              }
            ],
            id   : 'c',
            name : 'array'
          }
        ]
      }
    })
  })

  it('Should return the proper string tag ', async () =>
  {
    const tree = factory.create(
      'my-tree',
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
          source  : 'c',
          target  : 'd',
          payload : {}
        }
      ],
      'a'
    )

    let stringTag = Object.prototype.toString.call(tree)

    expect(stringTag).to.deep.equal('[object Tree]')

    stringTag = Object.prototype.toString.call(factory)

    expect(stringTag).to.deep.equal('[object TreeFactory]')
  })
})
