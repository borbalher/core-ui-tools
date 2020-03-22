class LogoutComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    buttonText
  })
  {
    const logout = this.componentComposer.create({
      id     : 'logout',
      schema : 'logout',
      buttonText
    })

    return logout
  }
}

module.exports = LogoutComposer
