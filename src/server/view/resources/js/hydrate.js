// index.js
import { h, render } from 'preact'
import Router from './router'

const
app = document.getElementById('app')

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  app,
  app.lastChild
)