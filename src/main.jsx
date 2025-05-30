import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { GeneralProvider } from './context/generalContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>,
)
