import { hydrate } from 'preact'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { html } from 'htm/preact'
import Index from 'common/view/components/index'
console.log('HUEHUE')
hydrate(html`<${Index}/>`, document.getElementById('index'))