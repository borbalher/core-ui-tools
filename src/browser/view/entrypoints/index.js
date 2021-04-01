import { h, render } from 'preact'

import Router from 'browser/view/router'

const app = document.getElementById('app')

render(
	<Router />,
	app,
	app.lastChild
)
