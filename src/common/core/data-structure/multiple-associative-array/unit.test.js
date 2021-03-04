describe('data/multiple-associative-array', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('server/core/factory')

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
      factory = core.locate('data-structure/multiple-associative-array')
      done()
    })
  })


  it('Can create a multiple associative array', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Can set/get elements in the associative array', () =>
  {
    const multipleAssociativeArray = factory.create()

    multipleAssociativeArray.setItem('id', true)

    expect(multipleAssociativeArray.getItem('id')).to.be.deep.equal([true])
  })

  it('Should get the element index', () =>
  {
    const multipleAssociativeArray = factory.create()

    multipleAssociativeArray.setItem('exist', 1)

    let index = multipleAssociativeArray.getElementIndex('exist', 1)

    expect(index).to.be.deep.equal(0)

    index = multipleAssociativeArray.getElementIndex('not-exist', 1)

    expect(index).to.be.deep.equal(-1)
  })

  it('Removing an element that not exists does not throw an error', () =>
  {
    const multipleAssociativeArray  = factory.create()

    expect(() =>
    {
      multipleAssociativeArray.removeElement('not-exist', 4)
    }).to.not.throw()
  })

  it('Can remove an element from a multiple associative array property', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.setItem('id', 1)

    multipleAssociativeArray.setItem('id', 2)

    multipleAssociativeArray.setItem('id', 3)

    multipleAssociativeArray.removeElement('id', 3)

    expect(multipleAssociativeArray.getItem('id')).to.be.deep.equal([1, 2])
  })

  it('Can clear the associative array', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.setItem('id', true)

    multipleAssociativeArray.clear()

    expect(multipleAssociativeArray.length()).to.deep.equal(0)
  })

  it('Can get the associative array in JSON format', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.setItem('id',  true)

    const json = multipleAssociativeArray.toJSON()

    expect(json).to.deep.equal({ 'id': [true] })
  })

  it('Can get the associative array in array format', () =>
  {
    const multipleAssociativeArray  = factory.create()

    multipleAssociativeArray.setItem('1', { 'foo': 'bar' })

    multipleAssociativeArray.setItem('1', { 'foo': 'baz' })

    multipleAssociativeArray.setItem('2', { 'bar': 'baz' })

    const array = multipleAssociativeArray.toArray()

    expect(array).to.deep.equal({
      keys   : ['1', '2'],
      values : [[{ 'foo': 'bar' }, { 'foo': 'baz' }], [{ 'bar': 'baz' }]]
    })
  })

  it('Can iterate the associative array', () =>
  {
    const
    multipleAssociativeArray          = factory.create(),
    multipleAssociativeArrayElements  = []

    multipleAssociativeArray.setItem('1', 1)

    multipleAssociativeArray.setItem('2', 2)

    multipleAssociativeArray.setItem('3', 3)

    for(let element of multipleAssociativeArray)
      multipleAssociativeArrayElements.push(element)

    expect(multipleAssociativeArrayElements).to.deep.equal([[1], [2], [3]])
  })

  it('Should return the proper string tag ', async () =>
  {
    const
    multipleAssociativeArray  = factory.create(),
    stringTag                 = Object.prototype.toString.call(multipleAssociativeArray)

    expect(stringTag).to.deep.equal('[object MultipleAssociativeArray]')
  })
})
