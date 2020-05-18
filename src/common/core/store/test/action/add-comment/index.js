/**
 * @implements {common/core/reducer/action}
 */
class AddCommentAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const
    { data: { comment } } = action,
    normalized        = this.store.normalizer.normalize(comment, 'entity/comment')

    return this.store.merge({ 'entities': { ...normalized } })
  }
}

module.exports = AddCommentAction
