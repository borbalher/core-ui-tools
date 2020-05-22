
describe('core/store', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  store,
  actionComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/schema' },
      { name: 'common/core/listener' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/store' },
      { name: 'common/core/entity-set' },
      { name: 'common/core/action/composer' },
      { name: 'common/core/event/composer' },
      { name: 'common/core/store/test' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        store          = core.locate('core/store')
        actionComposer = core.locate('core/action/composer')
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
    const newState = store.addEntityContextToState('entity/node', {
      id   : 1,
      name : 'A'
    })

    store.setState(newState)

    const state = store.getState()

    expect(state).to.be.deep.equal({
      entities :
      {
        node :
        {
          byId :
          {
            1 :
            {
              id   : 1,
              name : 'A'
            }
          },
          allIds : [1]
        }
      }
    })
  })

  it('Can compose an action', () =>
  {
    const action = actionComposer.compose('my.action', { value: 'foo' }, { charset: 'utf-8' })
    expect(action.meta.name).to.be.equal('my.action')
    expect(action.meta.charset).to.be.equal('utf-8')
    expect(action.data).to.be.deep.equal({ value: 'foo' })
  })

  it('Can dispatch an action', () =>
  {
    const action =  actionComposer.compose('add.node', { node: { id: 2, name: 'B' } }, { charset: 'utf-8' })
    store.dispatch(action)

    const state = store.getState()
    expect(state).to.be.deep.equal({
      entities :
      {
        node :
        {
          byId :
          {
            1 :
            {
              id   : 1,
              name : 'A'
            },
            2 :
            {
              id   : 2,
              name : 'B'
            }
          },
          allIds : [1, 2]
        }
      }
    })
  })
})

