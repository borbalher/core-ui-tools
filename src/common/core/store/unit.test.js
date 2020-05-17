
describe('core/store', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  store

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/listener' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/store' },
      { name: 'common/core/store/test' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        store = core.locate('core/store')
        done()
      })
    })
  })

  it('Can get the state', () =>
  {
    const state = store.getState()
    expect(state).to.be.deep.equal({})
  })

  it('Can set a state', () =>
  {
    store.setState({
      entities :
      {
        comment :
        {
          byId :
          {
            1 :
            {
              id    : 1,
              value : 'First'
            }
          },
          allIds : [1]
        }
      }
    })

    const state = store.getState()

    expect(state).to.be.deep.equal({
      entities :
      {
        comment :
        {
          byId :
          {
            1 :
            {
              id    : 1,
              value : 'First'
            }
          },
          allIds : [1]
        }
      }
    })
  })

  it('Can compose an action', () =>
  {
    const action = store.composeAction('my.action', { value: 'foo' }, { charset: 'utf-8' })
    expect(action.meta.name).to.be.deep.equal('my.action')
    expect(action.meta.charset).to.be.deep.equal('utf-8')
    expect(action.data).to.be.deep.equal({ value: 'foo' })
  })

  it('Can dispatch an action', () =>
  {
    const action = store.composeAction('add.comment', { comment: { id: 2, value: 'Second' } }, { charset: 'utf-8' })
    store.dispatch(action)

    const state = store.getState()
    expect(state).to.be.deep.equal({
      entities :
      {
        comment :
        {
          byId :
          {
            1 :
            {
              id    : 1,
              value : 'First'
            },
            2 :
            {
              id    : 2,
              value : 'Second'
            }
          },
          allIds : [1, 2]
        }
      }
    })
  })

  // it('Can set the view model', async () =>
  // {
  //   bus.on('view-model', 'view.model.changed', (event) =>
  //   {
  //     const { data: { previous, current } } = event
  //     expect(previous).to.be.not.deep.equal(current)
  //   })

  //   viewModel.setViewModel({ classes: 'my-class' })
  // })
})

