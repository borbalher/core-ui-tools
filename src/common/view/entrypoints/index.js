import '../styles/base.scss'

import { hydrate } from 'preact'
import { html } from 'htm/preact'
import Index from 'common/view/components/index'

hydrate(html`<${Index}/>`, document.getElementById('index'))