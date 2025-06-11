import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { default as GeneralInfo } from './components/generalInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GeneralInfo />
  </StrictMode>
)