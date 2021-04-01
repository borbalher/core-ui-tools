import { h } from 'preact'
import { Link } from 'preact-router'

export const App =     ({ count }) => (
  <div class="count">
    <p>{count}</p>
    <Link href="/about">About</Link>
  </div>
)