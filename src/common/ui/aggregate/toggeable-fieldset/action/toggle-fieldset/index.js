/**
 * @implements {common/core/reducer/action}
 */
class ToggleFieldsetAction
{
  // TODO add dictionary
  constructor(store, toggeableFieldsetComposer)
  {
    this.store                     = store
    this.toggeableFieldsetComposer = toggeableFieldsetComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const context = this.store.getEntityContext(schema, emitter)
    return this.store.addEntityContextToState(schema, this.toggeableFieldsetComposer.compose({ ...context, isToggled: value }))
  }
}

module.exports = ToggleFieldsetAction
