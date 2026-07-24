// Helps detect problems during development
import { StrictMode } from 'react'
// Help to control part of your html page
import { createRoot } from 'react-dom/client'
// React's router
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
