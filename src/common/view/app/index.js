module.exports =  ({ html, BOTS_USER_AGENTS, BotContext, Router, ToDo, DynamicRendering, ProgressiveRendering, StaticContent, Playground }) =>
{
  const App = ({ isBot, url }) =>
  {
    return html`
    <${BotContext.Provider} value=${isBot}>
      <${Router} url=${url}>
        <${ToDo}                 path="/to-dos"/>
        <${DynamicRendering}     isBot=${isBot} path="/dynamic-rendering" />
        <${ProgressiveRendering} path="/progressive-rendering" />
        <${StaticContent}        path="/static-content" />
        <${Playground}           path="/"/>
      </${Router}>
    </${BotContext.Provider}>`
  }

  App.getServerSideProps = async ({ ctx }) =>
  {
    const
    { request } = ctx
    userAgent   = request ? request.headers['user-agent'] : navigator.userAgent,
    isBot       = BOTS_USER_AGENTS.some((bot) =>
    {
      return userAgent.toLowerCase().includes(bot)
    }),
   props = { isBot }

    return props
  }

  return App
}

