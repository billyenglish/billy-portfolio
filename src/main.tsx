import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import ThemeProvide from "./subcomponent/ThemeProvider"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvide>
        <App />
      </ThemeProvide>
    </HashRouter>
  </StrictMode>,
)
