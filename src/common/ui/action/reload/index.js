/**
 * @implements {common/core/reducer/action}
 */
class ReloadAction
{
  execute(action, state)
  {
    const { data: { server } } = action

    window.location.reload(server)

    return state
  }
}

module.exports = ReloadAction
