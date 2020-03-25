class LogoutComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    buttonText = 'Logout'
  })
  {
    const logout = this.componentComposer.create({
      id         : 'logout',
      schema     : 'logout',
      classList  : ['button', 'button--filled'],
      wrapper    : 'button',
      buttonText
    })

    return logout
  }
}

module.exports = LogoutComposer
