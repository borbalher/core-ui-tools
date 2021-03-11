import { h, render } from 'preact'
import Router from './router'

const app = document.getElementById('app')

render(
  <Router />,
	app,
	app.lastChild
)
