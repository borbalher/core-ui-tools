describe('browser/core/console/factory', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require(`node/core/factory`)

  let
  core,
  factory

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/string' }
    ])

    core.load().then(() =>
    {
      factory = core.locate('core/console/factory')
      done()
    })
  })

  it('Should create a console instance', () =>
  {
    expect(() =>
    {
      factory.create()
    }).to.not.throw()
  })

  it('Should be to short a output string', () =>
  {
    let
    console = factory.create({
      'maxStringLength' : 10
    }),
    str             = 'AAA',
    shortenedString = console.shortenString(str)

    expect(shortenedString).to.be.deep.equal('AAA')

    str             = 'AAAAAAAAAAAA'
    shortenedString = console.shortenString(str)
    expect(shortenedString).to.be.deep.equal('AAAAA...AAAAA')

    console = factory.create({
      'maxStringLength' : false
    })
    shortenedString = console.shortenString(str)
    expect(shortenedString).to.be.deep.equal('AAAAAAAAAAAA')
  })

  it('Should get the current date', () =>
  {
    const
    dateformat = require('dateformat'),
    format     = 'yyyy-mm-dd'

    let
    console = factory.create({
      'date'       : true,
      'dateFormat' : format
    }),
    formattedDate = console.getCurrentDate()

    expect(formattedDate).to.be.deep.equal(dateformat(new Date(), format))

    console = factory.create({
      'dateFormat' : false
    })
    formattedDate = console.getCurrentDate()

    expect(formattedDate).to.be.a('string')
  })

  it('Should return the object stringified', () =>
  {
    let
    console           = factory.create({ 'stringify': true }),
    obj               = { 'foo': 'bar', 'bar': 'baz' },
    objectStringified = console.stringifyObject(obj)

    expect(objectStringified).to.be.deep.equal('{\n "foo": "bar",\n "bar": "baz"\n}')

    console = factory.create({
      'stringify' :
      {
        'replacer' : ['foo'],
        'space'    : 4
      }
    })

    objectStringified = console.stringifyObject(obj)

    expect(objectStringified).to.be.deep.equal('{\n    "foo": "bar"\n}')
  })

  it('Should build the output string', () =>
  {
    let
    console   = factory.create({
      'index'      : true,
      'date'       : true,
      'dateFormat' : 'yyyy-mm-dd',
      'prefix'     : 'PRE',
      'stringify'  : true
    }),
    obj       = { 'foo': 'bar' },
    outputStr = console.buildOutput([obj, 42])

    expect(outputStr).to.be.a('array')
    expect(outputStr[0]).to.be.a('string')

    console   = factory.create({
      'index'  : false,
      'date'   : false,
      'prefix' : false
    })
    outputStr = console.buildOutput([obj])

    expect(outputStr).to.be.a('array')
    expect(outputStr[0]).to.be.a('string')
  })

  it('Should not throw error when clearing', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.clear()
    }).to.not.throw()
  })

  it('Should reset the index if its bigger than MAX_SAFE_INTEGER', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.index = Number.MAX_SAFE_INTEGER
      console.log('This', 'should', 'not', 'blow')

      expect(console.index).to.be.equal(0)
    }).to.not.throw()
  })

  it('Should not execute callback if debug flag is false', () =>
  {
    expect(() =>
    {
      const
      console = factory.create({
        'debug' : false
      })

      let callbackExecuted = false

      console.output(['This', 'should', 'not', 'blow'], (args) => { callbackExecuted = true })

      expect(callbackExecuted).to.be.equal(false)
    }).to.not.throw()
  })

  it('Should not throw error when logging', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.log('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Should not throw error when info', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.info('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Should not throw error when warning', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.warning('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Should not throw error when error', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.error('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Should not throw error when trace', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.trace('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Should not throw error when table', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.table('This', 'should', 'not', 'blow')
    }).to.not.throw()
  })

  it('Group capabilities', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.log('This is the outer level')
      console.group()
      console.log('Level 2')
      console.group()
      console.log('Level 3')
      console.warning('More of level 3')
      console.groupEnd()
      console.log('Back to level 2')
      console.groupEnd()
      console.log('Back to the outer level')
      console.group(true)
      console.log('I am collapsed')
      console.log('Me too')
      console.groupEnd()
    }).to.not.throw()
  })

  it('Timer capabilities', () =>
  {
    expect(() =>
    {
      const console = factory.create()
      console.startTimer('test')
      console.getTimeLog('test')
      console.finishTimer('test')
    }).to.not.throw()
  })

  it('Can measure time', async () =>
  {
    const console = factory.create(),
    successCallback = async () =>
    {
      return new Promise((resolve) =>
      {
        setTimeout(() =>
        {
          resolve()
        }, 1000)
      })
    },
    errorCallback = async () =>
    {
      return new Promise((resolve, reject) =>
      {
        setTimeout(() =>
        {
          const error = new Error(':(')
          reject(error)
        }, 1000)
      })
    }

    expect(async () =>
    {
      await console.measureTime('timeout test (success)', successCallback)
    }).to.not.throw()

    try
    {
      await console.measureTime('timeout test (error)', errorCallback)
    }
    catch(error)
    {
      expect(error).to.be.an('error')
      expect(error.message).to.be.equal(':(')
    }
  })
})
