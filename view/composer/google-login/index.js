class GoogleLoginComposer
{
  constructor(componentComposer)
  {
    this.componentComposer = componentComposer
  }

  create({
    buttonText,
    authURI
  })
  {
    const googleLogin = this.componentComposer.create({
      id     : 'googleLogin',
      schema : 'google-login',
      buttonText,
      authURI
    })

    return googleLogin
  }
}

module.exports = GoogleLoginComposer
