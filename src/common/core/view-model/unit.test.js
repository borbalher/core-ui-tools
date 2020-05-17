
describe('core/view-model', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  bus,
  core,
  viewModel

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/view-model' },
      { name: 'common/core/listener' },
      { name: 'common/ui/aggregate/page' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/view-model/test' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        viewModel = core.locate('core/view-model')
        bus       = core.locate('infrastructure/bus')
        done()
      })
    })
  })

  it('Can get the view model', () =>
  {
    const
    viewModelState = viewModel.getViewModel()
    expect(viewModelState).to.be.deep.equal({})
  })


  it('Can set the view model', async () =>
  {
    bus.on('view-model', 'view.model.changed', (event) =>
    {
      const { data: { previous, current } } = event
      expect(previous).to.be.not.deep.equal(current)
    })

    viewModel.setViewModel({ classes: 'my-class' })
  })
})

