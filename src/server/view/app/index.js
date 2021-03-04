module.exports =  ({ html, BOTS_USER_AGENTS, BotContext, StaticRouter  }) =>
{
  const App = ({ Component, isBot, props }) =>
  {
    return html`
    <${BotContext.Provider} value=${isBot}>
      <${StaticRouter}>
        <${Component} ...${props}/>
      </${StaticRouter}>
    </${BotContext.Provider}>`
  }

  App.getServerSideProps = async ({ Component, ctx }) =>
  {
    const
    { request } = ctx
    userAgent   = request ? request.headers['user-agent'] : navigator.userAgent,
    isBot       = BOTS_USER_AGENTS.some((bot) =>
    {
      return userAgent.toLowerCase().includes(bot)
    })

    let props = {}

    if(Component.getServerSideProps && typeof Component.getServerSideProps === 'function')
      props = await Component.getServerSideProps(ctx)

    props.isBot = isBot

    return props
  }

  return App
}