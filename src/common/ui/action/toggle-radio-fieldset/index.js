/**
 * @implements {common/core/reducer/action}
 */
class ToggleFieldsetAction
{
  constructor(store, radioFieldsetComposer)
  {
    this.store                     = store
    this.radioFieldsetComposer = radioFieldsetComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const context = this.store.getEntityContext(schema, emitter)
    return this.store.addEntityContextToState(schema, this.radioFieldsetComposer.compose({ ...context, selectedFieldset: value }))
  }
}

module.exports = ToggleFieldsetAction
