import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { colors, fonts } from './theme.config.js'

// Push theme.config.js values onto the CSS custom properties so it is the
// single real source of truth for color/font — index.css only declares
// fallback values in case this runs late.
const root = document.documentElement.style
root.setProperty('--ink', colors.ink)
root.setProperty('--ink-soft', colors.inkSoft)
root.setProperty('--ink-muted', colors.inkMuted)
root.setProperty('--paper', colors.paper)
root.setProperty('--off', colors.off)
root.setProperty('--line', colors.line)
root.setProperty('--gold', colors.gold)
root.setProperty('--gold-soft', colors.goldSoft)
root.setProperty('--heading', fonts.heading)
root.setProperty('--body', fonts.body)
root.setProperty('--logo', fonts.logo)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
