/**
 * @implements {superhero/core/eventbus/observer}
 */
class ShowAlertAction
{
  execute(action, state)
  {
    const { data: { message } } = action

    alert(message)

    return state
  }
}

module.exports = ShowAlertAction
