
describe('core/deepfind', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

  let
  core,
  deepfind

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([])

    core.load().then(() =>
    {
      deepfind = core.locate('core/deepfind')
      done()
    })
  })

  it('Can find property value', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'b.a',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal('a')
  })

  it('Can find an array element', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'b.b[0]',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal(1)
  })

  it('If an intermediate property does not exists, return undefined', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'c.not-exists.this-neither',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal(undefined)
  })

  it('If an intermediate array element does not exists, it should return undefined', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'c.b[1].value',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal(undefined)
  })

  it('When property is not an object, it should return undefined', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'c.a.value',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal(undefined)
  })

  it('When array element is not an object, it should return undefined', () =>
  {
    const
    obj   = {
      'a' : 'a',
      'b' : {
        'a' : 'a',
        'b' : [1, 2, 3]
      },
      'c' : {
        'a' : 'a',
        'b' : [{ 'a': 'a' }]
      }
    },
    path  = 'b.b[0].value',
    value = deepfind.find(path, obj)

    expect(value).to.deep.equal(undefined)
  })
})
