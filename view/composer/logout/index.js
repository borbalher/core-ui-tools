class LogoutComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create(state)
  {
    const
    { buttonText = 'Logout' } = state || {},
    logout = this.componentComposer.create({
      id         : 'logout',
      classList  : ['button', 'button--filled'],
      wrapper    : 'button',
      buttonText
    })

    return logout
  }
}

module.exports = LogoutComposer
