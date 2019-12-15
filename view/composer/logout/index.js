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
    const googleLogin = this.componentComposer.create({
      id     : 'logout',
      schema : 'logout',
      buttonText
    })

    return googleLogin
  }
}

module.exports = LogoutComposer
