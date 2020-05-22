describe('common/core/action/composer', () =>
{
  const
  chai           = require('chai'),
  expect         = chai.expect,
  chaiDateString = require('chai-date-string'),
  CoreFactory    = require(`node/core/factory`)

  chai.use(chaiDateString)

  let
  core,
  actionComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/action/composer' }
    ])

    core.load().then(() =>
    {
      actionComposer = core.locate('core/action/composer')
      done()
    })
  })

  it('Can compose an ACTION', () =>
  {
    const
    meta =
    {
      emitter : 'my-action-emitter'
    },
    data =
    {
      foo : 'bar'
    },
    event = actionComposer.compose('ACTION', data, meta)


    expect(event.meta).to.have.all.keys('name', 'timestamp', 'emitter')
    expect(event.meta.name).to.be.equal('ACTION')
    expect(event.meta.emitter).to.be.equal('my-action-emitter')
    expect(event.meta.timestamp).to.be.a.dateString()
    expect(event.data).to.deep.equal(data)
  })


  it('Can compose an action without meta', () =>
  {
    const
    data =
    {
      foo : 'bar'
    },
    event = actionComposer.compose('ACTION', data)

    expect(event.meta).to.have.all.keys('name', 'timestamp')
    expect(event.meta.name).to.be.equal('ACTION')
    expect(event.meta.timestamp).to.be.a.dateString()
    expect(event.data).to.deep.equal(data)
  })
})
