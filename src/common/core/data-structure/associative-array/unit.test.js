describe('data-structure/associative-array', () =>
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
      { name: 'common/core/object' },
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'common/core/data-structure' },
      { name: 'node/core/schema/bootstrap' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        factory = core.locate('data-structure/associative-array')
        done()
      })
    })
  })

  it('Can create an associative array', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Can set/get elements in the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.setItem('id', true)

    expect(associativeArray.getItem('id')).to.be.deep.equal(true)
  })

  it('Removing an element that not exists does not throw an error', () =>
  {
    const associativeArray  = factory.create()

    expect(() =>
    {
      associativeArray.removeItem('not-exists')
    }).to.not.throw()
  })

  it('Can remove an element from the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.setItem('id', true)

    associativeArray.removeItem('id')

    expect(associativeArray.getItem('id')).to.be.equal(undefined)
  })

  it('Can clear the associative array', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.setItem('id', true)

    associativeArray.clear()

    expect(associativeArray.length()).to.deep.equal(0)
  })

  it('Can get the associative array in JSON format', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.setItem('id', true)

    const json = associativeArray.toJSON()

    expect(json).to.deep.equal({ 'id': true })
  })

  it('Can get the associative array in array format', () =>
  {
    const associativeArray  = factory.create()

    associativeArray.setItem('id', true)

    const array = associativeArray.toArray()

    expect(array).to.deep.equal({
      keys   : ['id'],
      values : [true]
    })
  })

  it('Can iterate the associative array', () =>
  {
    const
    associativeArray          = factory.create(),
    associativeArrayElements  = []

    associativeArray.setItem('1', 1)
    associativeArray.setItem('2', 2)
    associativeArray.setItem('3', 3)

    for(let element of associativeArray)
      associativeArrayElements.push(element)

    expect(associativeArrayElements).to.deep.equal([1, 2, 3])
  })

  it('Should return the proper string tag ', async () =>
  {
    const
    associativeArray  = factory.create(),
    stringTag         = Object.prototype.toString.call(associativeArray)

    expect(stringTag).to.deep.equal('[object AssociativeArray]')
  })
})
